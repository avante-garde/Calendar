import {
  CalendarWrapper,
  CalendarGrid,
  CalendarSchedule,
  CalendarHeader,
} from "./CalendarStyle";

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarGrid container>
        <CalendarHeader item></CalendarHeader>
        <CalendarSchedule item></CalendarSchedule>
      </CalendarGrid>
    </CalendarWrapper>
  );
};

export default Calendar;
