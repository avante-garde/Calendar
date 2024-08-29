import styled from "@emotion/styled";

const CalendarScheduleWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1282px;
  width: 50px;
`;

const SpacerBetweenHourTimeBlock = styled.div`
  height: 1232px;
  width: 10px;
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

const TimeBlockContainer = styled.div`
  display: flex;
  position: relative;
  height: 1232px;
  width: calc(100% - 50px);
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
};
