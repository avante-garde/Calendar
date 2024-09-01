import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const CalendarWrapper = styled.div`
  flex-basis: auto;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const CalendarGrid = styled(Grid)`
  height: 100%;
  width: 100%;
`;

const CalendarHeaderContainer = styled(Grid)`
  height: 84px;
  width: 100%;
`;

const CalendarScheduleContainer = styled(Grid)`
  height: calc(100% - 84px);
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

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

export {
  CalendarWrapper,
  CalendarGrid,
  CalendarHeaderContainer,
  CalendarScheduleContainer,
};
