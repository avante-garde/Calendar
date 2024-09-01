import { useEffect, useRef } from "react";
import {
  CalendarScheduleWrapper,
  SpacerBetweenHourTimeBlock,
  TimeBlockContainer,
  TimeContainer,
  TimesByHour,
  HorizontalLinesWrapper,
  HorizontalLines,
  HoursText,
  ScheduleOverflow,
} from "./style";
import TimeBlock from "./TimeBlock";
import { ICurrentWeekDate } from "../../../App";

const timesByHour = [
  "12 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

interface CalendarScheduleProps {
  currentWeekDates: ICurrentWeekDate[];
  coordinateOverflowX: number;
  handleOverflowX: (xCoord: number) => void;
}

const CalendarSchedule = (props: CalendarScheduleProps) => {
  const { currentWeekDates, coordinateOverflowX, handleOverflowX } = props;
  const calendarScheduleWrapperRef = useRef<HTMLDivElement>(null);
  const scheduleOverflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scheduleOverflowRef.current) {
      scheduleOverflowRef.current.addEventListener("scroll", (e: any) =>
        handleOverflowX(e),
      );
      scheduleOverflowRef.current.scrollTo(coordinateOverflowX, 0);
    }
  }, [coordinateOverflowX, scheduleOverflowRef.current]);

  return (
    <CalendarScheduleWrapper
      id="calendar-schedule-wrapper"
      ref={calendarScheduleWrapperRef}
    >
      <TimeContainer id="time-container">
        {timesByHour.map((hour, index) => (
          <TimesByHour id="times-by-hour" key={`times-by-hour-${index}`}>
            <HoursText id="hours-text">
              {index > 0 && index < timesByHour.length && hour}
            </HoursText>
          </TimesByHour>
        ))}
      </TimeContainer>
      <ScheduleOverflow id="schedule-overflow" ref={scheduleOverflowRef}>
        <TimeBlockContainer id="time-block-container">
          <HorizontalLinesWrapper id="horizontal-lines-wrapper">
            {Array(timesByHour.length)
              .fill(null)
              .map((_, index) => (
                <HorizontalLines
                  id="horizontal-lines"
                  key={`horizontal-lines-${index}`}
                />
              ))}
          </HorizontalLinesWrapper>
          <SpacerBetweenHourTimeBlock id="spacer"></SpacerBetweenHourTimeBlock>
          <TimeBlock
            calendarScheduleWrapperRef={calendarScheduleWrapperRef}
            currentWeekDates={currentWeekDates}
          />
        </TimeBlockContainer>
      </ScheduleOverflow>
    </CalendarScheduleWrapper>
  );
};

export default CalendarSchedule;
