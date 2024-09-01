import { useCallback, useState } from "react";
import { ICurrentWeekDate } from "../../App";
import CalendarHeader from "./CalendarHeader";
import CalendarSchedule from "./CalendarSchedule";
import {
  CalendarWrapper,
  CalendarGrid,
  CalendarHeaderContainer,
  CalendarScheduleContainer,
} from "./style";

interface CalendarProps {
  currentWeekDates: ICurrentWeekDate[];
  dayNames: string[];
}

const Calendar = (props: CalendarProps) => {
  const { currentWeekDates, dayNames } = props;

  const [coordinateOverflowX, setCoordinateOverflowX] = useState<number>(0);

  const handleOverflowX = useCallback(
    (event: any) => {
      setCoordinateOverflowX(event.target.scrollLeft);
    },
    [setCoordinateOverflowX],
  );

  return (
    <CalendarWrapper id="calendar-wrapper">
      <CalendarGrid container id="calendar-grid">
        <CalendarHeaderContainer item id="calendar-header-container">
          <CalendarHeader
            currentWeekDates={currentWeekDates}
            dayNames={dayNames}
            coordinateOverflowX={coordinateOverflowX}
            handleOverflowX={handleOverflowX}
          />
        </CalendarHeaderContainer>
        <CalendarScheduleContainer item id="calendar-schedule-container">
          <CalendarSchedule
            currentWeekDates={currentWeekDates}
            coordinateOverflowX={coordinateOverflowX}
            handleOverflowX={handleOverflowX}
          />
        </CalendarScheduleContainer>
      </CalendarGrid>
    </CalendarWrapper>
  );
};

export default Calendar;
