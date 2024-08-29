import styled from "@emotion/styled";

const CalendarHeaderWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    color: transparent;
  }
`;

const TimeZone = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50px;
`;

const VerticalLinesWrapper = styled.div`
  display: flex;
  &::after {
    width: 100%;
    position: absolute;
    content: "";
  }
`;

const VerticalLines = styled.div`
  width: calc(100% / 7);
  &::after {
    height: 10px;
    position: absolute;
    content: "";
    z-index: -1;
    border-right: 1px solid rgb(241, 243, 244);
  }
`;

const SpacerBetweenTimeZoneAndDays = styled.div`
  height: 100%;
  width: 10px;
`;

const DaysContainer = styled.div`
  display: flex;
  width: calc(100% - 50px);
`;

const DaysWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(255 204 204);
`;

const DayNamesWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const DayNames = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 30px;
  width: calc(100% / 7);
  color: #70757a;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

const DayNumberWrapper = styled.div`
  display: flex;
  height: calc(100% - 30px - 10px);
`;

const DayNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 7);
  font-size: 24px;
  font-variant: tabular-nums;
  font-weight: 400;
  color: #70757a;
`;

export {
  CalendarHeaderWrapper,
  TimeZone,
  SpacerBetweenTimeZoneAndDays,
  DaysContainer,
  DayNamesWrapper,
  DaysWrapper,
  DayNames,
  DayNumber,
  DayNumberWrapper,
  VerticalLinesWrapper,
  VerticalLines,
};
