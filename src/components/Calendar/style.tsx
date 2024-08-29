import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const CalendarWrapper = styled.div`
  height: calc(100% - 64px);
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const CalendarGrid = styled(Grid)`
  flex-direction: column;
  height: 100%;
  min-width: 600px;
`;

const CalendarHeaderContainer = styled(Grid)`
  height: 84px;
  width: 100%;
`;

const CalendarScheduleContainer = styled(Grid)`
  height: calc(100% - 84px);
  width: 100%;
`;

export {
  CalendarWrapper,
  CalendarGrid,
  CalendarHeaderContainer,
  CalendarScheduleContainer,
};
