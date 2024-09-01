import { MouseEvent, RefObject, useCallback, useEffect, useRef, useState } from "react";
import {
  TimeBlockDay,
  TimeBlockDaySeven,
  AddEventBubble,
  TimeBlockWrapper,
  AddEventBubbleTimes,
  AddEventBubbleTitle,
} from "./style";
import { ICurrentWeekDate } from "../../../../App";
import AddEvent, { TimeBlockEvent } from "./AddEvent";
import { timeSlots } from "../../../../constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../../main";

interface TimeBlockProps {
  calendarScheduleWrapperRef: RefObject<HTMLDivElement>;
  currentWeekDates: ICurrentWeekDate[];
}

const TimeBlock = (props: TimeBlockProps) => {
  const { calendarScheduleWrapperRef, currentWeekDates } = props;
  const timeBlockEvent = useSelector<RootState, TimeBlockEvent[]>(
    (state) => state.events,
  );
  const timeBlockRefSun = useRef<HTMLDivElement>(null);
  const timeBlockRefMon = useRef<HTMLDivElement>(null);
  const timeBlockRefTue = useRef<HTMLDivElement>(null);
  const timeBlockRefWed = useRef<HTMLDivElement>(null);
  const timeBlockRefThu = useRef<HTMLDivElement>(null);
  const timeBlockRefFri = useRef<HTMLDivElement>(null);
  const timeBlockRefSat = useRef<HTMLDivElement>(null);
  const [timeBlockEventsSun, setTimeBlockEventsSun] = useState<
    TimeBlockEvent[]
  >([]);
  const [timeBlockEventsMon, setTimeBlockEventsMon] = useState<
    TimeBlockEvent[]
  >([]);
  const [timeBlockEventsTue, setTimeBlockEventsTue] = useState<
    TimeBlockEvent[]
  >([]);
  const [timeBlockEventsWed, setTimeBlockEventsWed] = useState<
    TimeBlockEvent[]
  >([]);
  const [timeBlockEventsThu, setTimeBlockEventsThu] = useState<
    TimeBlockEvent[]
  >([]);
  const [timeBlockEventsFri, setTimeBlockEventsFri] = useState<
    TimeBlockEvent[]
  >([]);
  const [timeBlockEventsSat, setTimeBlockEventsSat] = useState<
    TimeBlockEvent[]
  >([]);
  const [isEventDialogOpen, setIsEventDialogOpen] = useState<boolean>(false);
  const [currentDayAddEvent, setCurrentDayAddEvent] = useState<
    ICurrentWeekDate
  >();
  const [currentTimeSelected, setCurrentTimeSelected] = useState<string>();
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    if (currentDayAddEvent && timeBlockEvent.length > 0) {
      handleAfterAddEvent();
    }
  }, [currentDayAddEvent, timeBlockEvent])

  const handleAfterAddEvent = useCallback(() => {
    if (currentDayAddEvent) {
      switch(currentDayAddEvent.name) {
        case "Sun":
          const sundayEvents = timeBlockEvent.filter((event) => event.currEventDayOfWeek === "Sun")
          setTimeBlockEventsSun(sundayEvents);
          break;
        case "Mon":
          const mondayEvents = timeBlockEvent.filter((event) => event.currEventDayOfWeek === "Mon")
          setTimeBlockEventsMon(mondayEvents);
          break;
        case "Tue":
          const tuesdayEvents = timeBlockEvent.filter((event) => event.currEventDayOfWeek === "Tue")
          setTimeBlockEventsTue(tuesdayEvents);
          break;
        case "Wed":
          const wednesdayEvents = timeBlockEvent.filter((event) => event.currEventDayOfWeek === "Wed")
          setTimeBlockEventsWed(wednesdayEvents);
          break;
        case "Thu":
          const thursdayEvents = timeBlockEvent.filter((event) => event.currEventDayOfWeek === "Thu")
          setTimeBlockEventsThu(thursdayEvents);
          break;
        case "Fri":
          const fridayEvents = timeBlockEvent.filter((event) => event.currEventDayOfWeek === "Fri")
          setTimeBlockEventsFri(fridayEvents);
          break;
        case "Sat":
          const saturdayEvents = timeBlockEvent.filter((event) => event.currEventDayOfWeek === "Sat")
          setTimeBlockEventsSat(saturdayEvents);
          break;
      }
    }
  }, [currentDayAddEvent, timeBlockEvent, setTimeBlockEventsSun]);

  const handleAddEvent = useCallback(
    (event: MouseEvent, currentRefDay: RefObject<HTMLDivElement>) => {
      if (currentRefDay.current && calendarScheduleWrapperRef.current) {
        // Count 24 hours inclusive = 25
        const numberOfHourBlocks = 25;

        const timeBlockHourCoordinates =
          Math.round(event.nativeEvent.offsetY / numberOfHourBlocks) *
          numberOfHourBlocks;
        const roundedHalfHour = Math.round(
          (timeBlockHourCoordinates / 1200) * 48,
        );

        setIsEventDialogOpen(true);
        setTop(timeBlockHourCoordinates);
        setLeft(event.nativeEvent.offsetX);
        setCurrentTimeSelected(
          `${timeSlots[roundedHalfHour]} - ${timeSlots[roundedHalfHour + 2]}`,
        );

        // TODO: Reusable callback function can be used for each switch case.
        switch (currentRefDay.current.id) {
          case "Sun":
            const sun = currentWeekDates.filter((d) => d.name === "Sun")[0];
            setCurrentDayAddEvent(sun);
            break;
          case "Mon":
            const mon = currentWeekDates.filter((d) => d.name === "Mon")[0];
            setCurrentDayAddEvent(mon);
            break;
          case "Tue":
            const tue = currentWeekDates.filter((d) => d.name === "Tue")[0];
            setCurrentDayAddEvent(tue);
            break;
          case "Wed":
            const wed = currentWeekDates.filter((d) => d.name === "Wed")[0];
            setCurrentDayAddEvent(wed);
            break;
          case "Thu":
            const thu = currentWeekDates.filter((d) => d.name === "Thu")[0];
            setCurrentDayAddEvent(thu);
            break;
          case "Fri":
            const fri = currentWeekDates.filter((d) => d.name === "Fri")[0];
            setCurrentDayAddEvent(fri);
            break;
          case "Sat":
            const sat = currentWeekDates.filter((d) => d.name === "Sat")[0];
            setCurrentDayAddEvent(sat);
            break;
        }
      }
    },
    [
      calendarScheduleWrapperRef.current,
      currentWeekDates,
      currentDayAddEvent,
      setCurrentDayAddEvent,
      setIsEventDialogOpen,
      setCurrentTimeSelected,
    ],
  );

  {
    /** 
     * TODO: Refactor and split up, switch against using a dialog modal 
     * and create a div element instead 
     * */
    /** 
     * TODO: 
     * Modify the left and positions so that it can be viewed directly to the side
     * of the AddEventBubble. Each of the days will have a different left position.
     */
  }
  return (
    <TimeBlockWrapper id="time-block-wrapper">
      <TimeBlockDay
        id="Sun"
        ref={timeBlockRefSun}
        onClick={(e) => handleAddEvent(e, timeBlockRefSun)}
      >
        {
          (currentDayAddEvent?.name === "Sun" && isEventDialogOpen) &&
          <AddEventBubble 
            top={top}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          />
        }
        {
          (currentDayAddEvent?.name === "Sun" && isEventDialogOpen) && (
          <AddEvent
            currentDayAddEvent={currentDayAddEvent}
            currentTimeSelected={currentTimeSelected}
            left={left + 100}
            top={top}
            setIsEventDialogOpen={setIsEventDialogOpen}
          />
        )}
        {timeBlockEventsSun.map((currDayEvent, index) => (
          <AddEventBubble
            id="add-event-bubble"
            key={`add-event-bubble-${index}`}
            top={currDayEvent.yCoordinate}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              // Add state change to display a preview bubble of the event
            }}
          >
            <AddEventBubbleTitle>
              {currDayEvent.eventTitle}
            </AddEventBubbleTitle>
            <AddEventBubbleTimes>
              {currDayEvent.startTime}
            </AddEventBubbleTimes>
          </AddEventBubble>
        ))}
      </TimeBlockDay>
      <TimeBlockDay
        id="Mon"
        ref={timeBlockRefMon}
        onClick={(e) => handleAddEvent(e, timeBlockRefMon)}
      >
        {
          (currentDayAddEvent?.name === "Mon" && isEventDialogOpen) &&
          <AddEventBubble 
            top={top}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          />
        }
        {
          (currentDayAddEvent?.name === "Mon" && isEventDialogOpen) && (
          <AddEvent
            currentDayAddEvent={currentDayAddEvent}
            currentTimeSelected={currentTimeSelected}
            left={left + 100}
            top={top}
            setIsEventDialogOpen={setIsEventDialogOpen}
          />
        )}
        {timeBlockEventsMon.map((currDayEvent, index) => (
          <AddEventBubble
            key={`add-event-bubble-${index}`}
            top={currDayEvent.yCoordinate}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          >
            <AddEventBubbleTitle>
              {currDayEvent.eventTitle}
            </AddEventBubbleTitle>
            <AddEventBubbleTimes>
              {currDayEvent.startTime}
            </AddEventBubbleTimes>
          </AddEventBubble>
        ))}
      </TimeBlockDay>
      <TimeBlockDay
        id="Tue"
        ref={timeBlockRefTue}
        onClick={(e) => handleAddEvent(e, timeBlockRefTue)}
      >
        {
          (currentDayAddEvent?.name === "Tue" && isEventDialogOpen) &&
          <AddEventBubble 
            top={top}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          />
        }
        {
          (currentDayAddEvent?.name === "Tue" && isEventDialogOpen) && (
          <AddEvent
            currentDayAddEvent={currentDayAddEvent}
            currentTimeSelected={currentTimeSelected}
            left={left + 100}
            top={top}
            setIsEventDialogOpen={setIsEventDialogOpen}
          />
        )}
        {timeBlockEventsTue.map((currDayEvent, index) => (
          <AddEventBubble
            key={`add-event-bubble-${index}`}
            top={currDayEvent.yCoordinate}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          >
            <AddEventBubbleTitle>
              {currDayEvent.eventTitle}
            </AddEventBubbleTitle>
            <AddEventBubbleTimes>
              {currDayEvent.startTime}
            </AddEventBubbleTimes>
          </AddEventBubble>
        ))}
      </TimeBlockDay>
      <TimeBlockDay
        id="Wed"
        ref={timeBlockRefWed}
        onClick={(e) => handleAddEvent(e, timeBlockRefWed)}
      >
        {
          (currentDayAddEvent?.name === "Wed" && isEventDialogOpen) &&
          <AddEventBubble 
            top={top}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          />
        }
        {
          (currentDayAddEvent?.name === "Wed" && isEventDialogOpen)  && (
          <AddEvent
            currentDayAddEvent={currentDayAddEvent}
            currentTimeSelected={currentTimeSelected}
            left={left + 100}
            top={top}
            setIsEventDialogOpen={setIsEventDialogOpen}
          />
        )}
        {timeBlockEventsWed.map((currDayEvent, index) => (
          <AddEventBubble
            key={`add-event-bubble-${index}`}
            top={currDayEvent.yCoordinate}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          >
            <AddEventBubbleTitle>
              {currDayEvent.eventTitle}
            </AddEventBubbleTitle>
            <AddEventBubbleTimes>
              {currDayEvent.startTime}
            </AddEventBubbleTimes>
          </AddEventBubble>
        ))}
      </TimeBlockDay>
      <TimeBlockDay
        id="Thu"
        ref={timeBlockRefThu}
        onClick={(e) => handleAddEvent(e, timeBlockRefThu)}
      >
        {
          (currentDayAddEvent?.name === "Thu" && isEventDialogOpen) &&
          <AddEventBubble 
            top={top}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          />
        }
        {
          (currentDayAddEvent?.name === "Thu" && isEventDialogOpen) && (
          <AddEvent
            currentDayAddEvent={currentDayAddEvent}
            currentTimeSelected={currentTimeSelected}
            left={left - 450}
            top={top}
            setIsEventDialogOpen={setIsEventDialogOpen}
          />
        )}
        {timeBlockEventsThu.map((currDayEvent, index) => (
          <AddEventBubble
            key={`add-event-bubble-${index}`}
            top={currDayEvent.yCoordinate}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          >
            <AddEventBubbleTitle>
              {currDayEvent.eventTitle}
            </AddEventBubbleTitle>
            <AddEventBubbleTimes>
              {currDayEvent.startTime}
            </AddEventBubbleTimes>
          </AddEventBubble>
        ))}
      </TimeBlockDay>
      <TimeBlockDay
        id="Fri"
        ref={timeBlockRefFri}
        onClick={(e) => handleAddEvent(e, timeBlockRefFri)}
      >
        {
          (currentDayAddEvent?.name === "Fri" && isEventDialogOpen) &&
          <AddEventBubble 
            top={top}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          />
        }
        {
          (currentDayAddEvent?.name === "Fri" && isEventDialogOpen) && (
          <AddEvent
            currentDayAddEvent={currentDayAddEvent}
            currentTimeSelected={currentTimeSelected}
            left={left - 450}
            top={top}
            setIsEventDialogOpen={setIsEventDialogOpen}
          />
        )}
        {timeBlockEventsFri.map((currDayEvent, index) => (
          <AddEventBubble
            key={`add-event-bubble-${index}`}
            top={currDayEvent.yCoordinate}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          >
            <AddEventBubbleTitle>
              {currDayEvent.eventTitle}
            </AddEventBubbleTitle>
            <AddEventBubbleTimes>
              {currDayEvent.startTime}
            </AddEventBubbleTimes>
          </AddEventBubble>
        ))}
      </TimeBlockDay>
      <TimeBlockDaySeven
        id="Sat"
        ref={timeBlockRefSat}
        onClick={(e) => handleAddEvent(e, timeBlockRefSat)}
      >
        {
          (currentDayAddEvent?.name === "Sat" && isEventDialogOpen) &&
          <AddEventBubble 
            top={top}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          />
        }
        {
          (currentDayAddEvent?.name === "Sat" && isEventDialogOpen) && (
          <AddEvent
            currentDayAddEvent={currentDayAddEvent}
            currentTimeSelected={currentTimeSelected}
            left={left - 450}
            top={top}
            setIsEventDialogOpen={setIsEventDialogOpen}
          />
        )}
        {timeBlockEventsSat.map((currDayEvent, index) => (
          <AddEventBubble
            key={`add-event-bubble-${index}`}
            top={currDayEvent.yCoordinate}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          >
            <AddEventBubbleTitle>
              {currDayEvent.eventTitle}
            </AddEventBubbleTitle>
            <AddEventBubbleTimes>
              {currDayEvent.startTime}
            </AddEventBubbleTimes>
          </AddEventBubble>
        ))}
      </TimeBlockDaySeven>
    </TimeBlockWrapper>
  );
};

export default TimeBlock;
