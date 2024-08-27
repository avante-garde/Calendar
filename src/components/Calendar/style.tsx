import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const CalendarWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-width: 600px;
`;

const CalendarGrid = styled(Grid)`
  flex-direction: column;
  height: 100%;
`;

const CalendarHeaderContainer = styled(Grid)`
  height: 84px;
  width: 100%;
  background-color: lightyellow;
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
