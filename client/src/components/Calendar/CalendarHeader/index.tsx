import { useEffect, useRef } from "react";
import { CurrentWeekDate } from "../../../App";
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
  DayNamesInnerWrapper,
} from "./style";

interface CalendarHeaderProps {
  currentWeekDates: CurrentWeekDate[];
  coordinateOverflowX: number;
  handleOverflowX: (xCoord: number) => void;
}

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { currentWeekDates, coordinateOverflowX, handleOverflowX } =
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
          {currentWeekDates.map((currentWeekDate, index) => (
            <DayNamesInnerWrapper key={`current-week-date-${index}`}>
              <DayNamesWrapper id="day-names-wrapper">
                <DayNames id="day-names" key={`day-names-${index}`}>
                  {currentWeekDate.name.slice(0, 3)}
                </DayNames>
              </DayNamesWrapper>
              <DayNumberWrapper id="day-number-wrapper">
                <DayNumber id="day-number" key={`day-number-${index}`}>
                  {currentWeekDate.date.getDate()}
                </DayNumber>
              </DayNumberWrapper>
              <VerticalLinesWrapper id="vertical-lines-wrapper">
                <VerticalLines
                  id="vertical-lines"
                  key={`vertical-lines-${index}`}
                />
              </VerticalLinesWrapper>
            </DayNamesInnerWrapper>
          ))}
        </DaysWrapper>
      </DaysContainer>
    </CalendarHeaderWrapper>
  );
};

export default CalendarHeader;
