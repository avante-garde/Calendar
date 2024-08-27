import CalendarHeader from "./CalendarHeader";
import CalendarSchedule from "./CalendarSchedule";
import {
  CalendarWrapper,
  CalendarGrid,
  CalendarHeaderContainer,
  CalendarScheduleContainer,
} from "./style";

const Calendar = () => {
  return (
    <CalendarWrapper id="calendar-wrapper">
      <CalendarGrid container id="calendar-grid">
        <CalendarHeaderContainer item id="calendar-header-container">
          <CalendarHeader />
        </CalendarHeaderContainer>
        <CalendarScheduleContainer item id="calendar-schedule-container">
          <CalendarSchedule />
        </CalendarScheduleContainer>
      </CalendarGrid>
    </CalendarWrapper>
  );
};

export default Calendar;
