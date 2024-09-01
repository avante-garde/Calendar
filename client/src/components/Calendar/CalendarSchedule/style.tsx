import styled from "@emotion/styled";

const CalendarScheduleWrapper = styled.div`
  display: flex;
  width: 100%;

  &::before {
    position: absolute;
    content: "";
    height: 4px;
    width: calc(100%);
    box-shadow:
      inset 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      inset 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(50px * 24);
  min-width: 40px;
`;

const SpacerBetweenHourTimeBlock = styled.div`
  height: calc(50px * 24);
  width: 8px;
  min-width: 8px;
  border-right: 1px solid rgb(241, 243, 244);
`;

const TimesByHour = styled.div`
  height: 50px;
`;

const HoursText = styled.span`
  display: block;
  position: relative;
  top: -6px;
  color: #70757a;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  text-align: center;
`;

const ScheduleOverflow = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: lightgrey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #70757a;
  }
`;

const TimeBlockContainer = styled.div`
  display: flex;
  position: relative;
  height: calc(50px * 24);
  width: 100%;
  min-width: 300px;
`;

const HorizontalLinesWrapper = styled.div`
  &::after {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    content: "";
  }
`;

const HorizontalLines = styled.div`
  height: 50px;

  &::after {
    position: absolute;
    width: 100%;
    min-width: calc(54px * 7 + 7px);
    border-bottom: 1px solid rgb(241, 243, 244);
    content: "";
    z-index: -1;
  }
`;

export {
  CalendarScheduleWrapper,
  SpacerBetweenHourTimeBlock,
  TimesByHour,
  HoursText,
  TimeContainer,
  TimeBlockContainer,
  HorizontalLinesWrapper,
  HorizontalLines,
  ScheduleOverflow,
};
