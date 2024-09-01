import { useEffect, useRef } from "react";
import { ICurrentWeekDate } from "../../../App";
import {
  CalendarHeaderWrapper,
  DayNames,
  DayNumberWrapper,
  DaysContainer,
  DaysWrapper,
  SpacerBetweenTimeZoneAndDays,
  TimeZone,
  VerticalLinesWrapper,
  VerticalLines,
  DayNamesWrapper,
  DayNumber,
} from "./style";

interface CalendarHeaderProps {
  currentWeekDates: ICurrentWeekDate[];
  dayNames: string[];
  coordinateOverflowX: number;
  handleOverflowX: (xCoord: number) => void;
}

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { currentWeekDates, dayNames, coordinateOverflowX, handleOverflowX } =
    props;
  const daysContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (daysContainerRef.current) {
      daysContainerRef.current.addEventListener("scroll", (e: any) =>
        handleOverflowX(e),
      );
      daysContainerRef.current.scrollTo(coordinateOverflowX, 0);
    }
  }, [coordinateOverflowX, daysContainerRef.current]);

  return (
    <CalendarHeaderWrapper id="calendar-header-wrapper">
      <TimeZone id="time-zone" />
      <DaysContainer id="days-container" ref={daysContainerRef}>
        <SpacerBetweenTimeZoneAndDays id="spacer-between-time-zone-and-days" />
        <DaysWrapper id="days-wrapper">
          <DayNamesWrapper id="day-names-wrapper">
            {dayNames.map((dayName, index) => {
              return (
                <DayNames id="day-names" key={`day-names-${index}`}>
                  {dayName}
                </DayNames>
              );
            })}
          </DayNamesWrapper>
          <DayNumberWrapper id="day-number-wrapper">
            {currentWeekDates.map((currentWeekDate, index) => (
              <DayNumber id="day-number" key={`day-number-${index}`}>
                {currentWeekDate.date.getDate()}
              </DayNumber>
            ))}
          </DayNumberWrapper>
          <VerticalLinesWrapper id="vertical-lines-wrapper">
            {Array(dayNames.length)
              .fill(null)
              .map((_, index) => (
                <VerticalLines
                  id="vertical-lines"
                  key={`vertical-lines-${index}`}
                />
              ))}
          </VerticalLinesWrapper>
        </DaysWrapper>
      </DaysContainer>
    </CalendarHeaderWrapper>
  );
};

export default CalendarHeader;
