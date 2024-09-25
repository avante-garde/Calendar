import {
  MouseEvent,
  RefObject,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  TimeBlockDay,
  AddEventBubble,
  TimeBlockWrapper,
  AddEventBubbleTimes,
  AddEventBubbleTitle,
} from "./style";
import { CurrentWeekDate } from "../../../../App";
import AddEvent from "./AddEvent";
import { timeSlots } from "../../../../constants";
import { useGetCalendarEventsQuery } from "../../../../store/services/event";

export interface TimeBlockEvent {
  startDate: Date;
  endDate: Date;
  title: string;
  guests: string;
  location: string;
  description: string;
  xCoordinate?: number;
  yCoordinate: number;
}

interface TimeBlockProps {
  calendarScheduleWrapperRef: RefObject<HTMLDivElement>;
  currentWeekDates: CurrentWeekDate[];
}

const oneDayDurationMs = 86400000;

const TimeBlock = (props: TimeBlockProps) => {
  const { calendarScheduleWrapperRef, currentWeekDates } = props;

  const {
    data: allEvents,
  } = useGetCalendarEventsQuery();

  const [isEventDialogOpen, setIsEventDialogOpen] = useState<boolean>(false);
  const [currentDayAddEvent, setCurrentDayAddEvent] =
    useState<CurrentWeekDate>();
  const [currentStartTimeSelected, setCurrentStartTimeSelected] =
    useState<string>();
  const [currentEndTimeSelected, setCurrentEndTimeSelected] =
    useState<string>();
  const [addEventBubbleTop, setAddEventBubbleTop] = useState<number>(0);
  const [addEventDialogLeft, setAddEventDialogLeft] = useState<number>(0);
  const [addEventDialogTop, setAddEventDialogTop] = useState<number>(0);

  /** Transform data after fetch to place the event bubbles in the correct spot. */
  const handleAfterFetchEvent = useCallback(() => {
    if (
      calendarScheduleWrapperRef.current && 
      allEvents
    ) {
      const currWeeklyEvents = new Array(7).fill(0).map(() => new Array());

      allEvents.forEach((dayEvent) => {
        /**
         * Date from fetch is displayed as ISO 8601. This converts it to a JS Date Object. 
         * */ 
        const startDate = new Date(dayEvent.startDate);

        /**
         * TODO: Implement the end date portion to be customizable. 
         * Currently defaults to a 1-hour block.
         * This and currentEndTimeSelected will also determine height of event bubble.
         *  */ 
        const endDate = new Date(dayEvent.endDate);

        const timeSlotIndex = timeSlots.indexOf(startDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' }));

        const currEvent: TimeBlockEvent = {
          startDate,
          endDate,
          title: dayEvent.title,
          guests: dayEvent.guests,
          location: dayEvent.location,
          description: dayEvent.description,
          yCoordinate:
            (timeSlotIndex / (timeSlots.length - 1)) *
            calendarScheduleWrapperRef.current!.clientHeight,
        };
        currWeeklyEvents[startDate.getDay()].push(currEvent);
      });
      return currWeeklyEvents;
    }
  }, [allEvents]);

  const timeBlockEvents = useMemo(() => handleAfterFetchEvent(), [allEvents]);

  const handleAddEvent = useCallback(
    (event: MouseEvent, currWeekIdx: number) => {
      if (calendarScheduleWrapperRef.current) {
        // Size of 1 hour slot = 50 px. Nearest quarter hour block = 50 / 4.
        const quarterHourBlockSize = 50 / 4;

        const timeBlockHourCoordinates =
          Math.round(event.nativeEvent.offsetY / quarterHourBlockSize) *
          quarterHourBlockSize;
        const roundedQuarterHour = Math.round(
          (timeBlockHourCoordinates / 1200) * (timeSlots.length - 1),
        );

        setIsEventDialogOpen(true);
        setAddEventBubbleTop(timeBlockHourCoordinates);

        // TODO: Calculate AddEventDialog position. Currently hardcoding based on styled properties.
        if (currWeekIdx < 3) {
          setAddEventDialogLeft(150 * (currWeekIdx + 1) + 20);
        } else {
          setAddEventDialogLeft(150 * currWeekIdx - 420);
        }
        setAddEventDialogTop(0);

        setCurrentStartTimeSelected(timeSlots[roundedQuarterHour]);
        setCurrentEndTimeSelected(timeSlots[roundedQuarterHour + 4]);

        let [startHour, startMinute, startMeridian] = timeSlots[roundedQuarterHour].split(/[: ]/);
        let [endHour, endMinute, endMeridian] = timeSlots[roundedQuarterHour + 4].split(/[: ]/);

        const currentSelectedDate = new Date(currentWeekDates[currWeekIdx].date)
        currentWeekDates[currWeekIdx].startDate = new Date(currentSelectedDate);
        currentWeekDates[currWeekIdx].endDate = new Date(currentSelectedDate);

        if (startMeridian === 'PM') {
          startHour = (Number(startHour) + 12).toString();
        }
        if (endMeridian === 'PM') {
          endHour = (Number(endHour) + 12).toString();
        }

        currentWeekDates[currWeekIdx].startDate.setHours(Number(startHour));
        currentWeekDates[currWeekIdx].startDate.setMinutes(Number(startMinute));
        currentWeekDates[currWeekIdx].startDate.setSeconds(0);
        currentWeekDates[currWeekIdx].endDate.setHours(Number(endHour));
        currentWeekDates[currWeekIdx].endDate.setMinutes(Number(endMinute));
        currentWeekDates[currWeekIdx].endDate.setSeconds(0);

        setCurrentDayAddEvent(currentWeekDates[currWeekIdx]);
      }
    },
    [
      calendarScheduleWrapperRef.current,
      currentWeekDates,
      setCurrentDayAddEvent,
      setIsEventDialogOpen,
      setCurrentStartTimeSelected,
      setAddEventDialogLeft,
      setAddEventDialogTop,
      setAddEventBubbleTop,
    ],
  );

  return (
    <TimeBlockWrapper id="time-block-wrapper">
      { currentWeekDates.map((currentWeekDate, index) => {
        return (
          <TimeBlockDay
            id={`time-block-day-${currentWeekDate.name.toLowerCase()}`}
            onClick={(e) => handleAddEvent(e, index)}
            key={`${currentWeekDate.name}`}
            index={index}
          >
            { isEventDialogOpen && 
              currentWeekDate.name === currentDayAddEvent?.name  && 
              currentStartTimeSelected &&
              currentEndTimeSelected &&
              timeBlockEvents && (
              <>
                <AddEventBubble
                  top={addEventBubbleTop}
                  onClick={(e) => e.stopPropagation()}
                />
                <AddEvent
                  currentDayAddEvent={currentDayAddEvent}
                  currentStartTimeSelected={currentStartTimeSelected}
                  currentEndTimeSelected={currentEndTimeSelected}
                  left={addEventDialogLeft}
                  top={addEventBubbleTop}
                  setIsEventDialogOpen={setIsEventDialogOpen}
                  timeBlockEvents={timeBlockEvents}
                />
              </>
            )}
            { timeBlockEvents &&
              timeBlockEvents[index].map((currDayEvent, idx) => 
                {
                  if (
                      currDayEvent.startDate.getTime() >= currentWeekDates[0].date.getTime() &&
                      currDayEvent.endDate.getTime() <= (currentWeekDates[currentWeekDates.length - 1].date.getTime() + oneDayDurationMs)
                    )
                return (
                <AddEventBubble
                id="add-event-bubble"
                key={`add-event-bubble-${idx}`}
                top={currDayEvent.yCoordinate}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                }}
              >
                <AddEventBubbleTitle>
                  {currDayEvent.title}
                </AddEventBubbleTitle>
                <AddEventBubbleTimes>
                  {currDayEvent.startDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })} - {currDayEvent.endDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}
                </AddEventBubbleTimes>
              </AddEventBubble>
              )})
            }
          </TimeBlockDay>
        )}
      )}
    </TimeBlockWrapper>
  );
};

export default TimeBlock;
