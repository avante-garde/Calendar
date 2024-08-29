import { useState } from "react";
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
  currentDayNumbersInWeek: number[];
  dayNames: string[];
}

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { currentDayNumbersInWeek, dayNames } = props;

  return (
    <CalendarHeaderWrapper id="calendar-header-wrapper">
      <TimeZone id="time-zone" />
      <DaysContainer id="days-container">
        <SpacerBetweenTimeZoneAndDays id="spacer-between-time-zone-and-days" />
        <DaysWrapper id="days-wrapper">
          <DayNamesWrapper>
            {dayNames.map((dayName, index) => {
              return (
                <DayNames id="day-names" key={`day-names-${index}`}>
                  {dayName}
                </DayNames>
              );
            })}
          </DayNamesWrapper>
          <DayNumberWrapper id="day-number-wrapper">
            {currentDayNumbersInWeek.map((dayNumber, index) => (
              <DayNumber id="day-number" key={`day-number-${index}`}>
                {dayNumber}
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
