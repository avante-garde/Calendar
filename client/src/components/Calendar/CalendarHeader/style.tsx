import styled from "@emotion/styled";

const CalendarHeaderWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
`;

const TimeZone = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 40px;
`;

const DaysContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 0px;
    width: 8px;
    background: transparent;
  }
`;

/*
  Keeping border right as invisible to match timeblock spacer for calculating dimensions
*/
const SpacerBetweenTimeZoneAndDays = styled.div`
  height: 100%;
  width: 8px;
  min-width: 8px;
`;

const DaysWrapper = styled.div`
  width: calc(100% - 8px);
  position: relative;
  min-width: 300px;
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
  min-width: 54px;
  color: #70757a;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  border-left: 1px solid transparent;
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
  min-width: 54px;
  font-size: 24px;
  font-weight: 400;
  color: #70757a;
  border-left: 1px solid transparent;
`;

const VerticalLinesWrapper = styled.div`
  display: flex;
  &::after {
    height: 20px;
    position: relative;
    content: "";
  }
`;

const VerticalLines = styled.div`
  width: calc(100% / 7);
  min-width: 55px;
  &::after {
    top: 64px;
    height: 20px;
    position: absolute;
    content: "";
    border-left: 1px solid rgb(241, 243, 244);
  }
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
