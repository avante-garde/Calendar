import {
  CalendarScheduleWrapper,
  SpacerBetweenHourTimeBlock,
  TimeBlockContainer,
  TimeContainer,
  TimesByHour,
  HorizontalLinesWrapper,
  HorizontalLines,
  HoursText,
} from "./style";
import TimeBlock from "./TimeBlock";

// TODO: make this useMemo possibly
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
  "EOD",
];

const CalendarSchedule = () => {
  return (
    <CalendarScheduleWrapper id="calendar-schedule-wrapper">
      <TimeContainer id="time-container">
        {timesByHour.map((hour, index) => (
          <TimesByHour key={`times-by-hour-${index}`}>
            <HoursText>
              {index > 0 && index < timesByHour.length - 1 && hour}
            </HoursText>
          </TimesByHour>
        ))}
      </TimeContainer>
      <TimeBlockContainer id="time-block-container">
        <HorizontalLinesWrapper id="horizontal-lines-wrapper">
          {Array(timesByHour.length - 1)
            .fill(null)
            .map((_, index) => (
              <HorizontalLines
                id="horizontal-lines"
                key={`horizontal-lines-${index}`}
              />
            ))}
        </HorizontalLinesWrapper>
        <SpacerBetweenHourTimeBlock id="spacer"></SpacerBetweenHourTimeBlock>
        <TimeBlock />
      </TimeBlockContainer>
    </CalendarScheduleWrapper>
  );
};

export default CalendarSchedule;
