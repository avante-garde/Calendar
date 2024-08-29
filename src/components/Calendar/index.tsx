import CalendarHeader from "./CalendarHeader";
import CalendarSchedule from "./CalendarSchedule";
import {
  CalendarWrapper,
  CalendarGrid,
  CalendarHeaderContainer,
  CalendarScheduleContainer,
} from "./style";

interface CalendarProps {
  currentDayNumbersInWeek: number[];
  dayNames: string[];
}

const Calendar = (props: CalendarProps) => {
  const { currentDayNumbersInWeek, dayNames } = props;

  return (
    <CalendarWrapper id="calendar-wrapper">
      <CalendarGrid container id="calendar-grid">
        <CalendarHeaderContainer item id="calendar-header-container">
          <CalendarHeader
            currentDayNumbersInWeek={currentDayNumbersInWeek}
            dayNames={dayNames}
          />
        </CalendarHeaderContainer>
        <CalendarScheduleContainer item id="calendar-schedule-container">
          <CalendarSchedule />
        </CalendarScheduleContainer>
      </CalendarGrid>
    </CalendarWrapper>
  );
};

export default Calendar;
