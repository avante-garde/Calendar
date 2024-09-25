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
import { CurrentWeekDate } from "../../../App";
import { timesByHour } from "../../../constants";

interface CalendarScheduleProps {
  currentWeekDates: CurrentWeekDate[];
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
