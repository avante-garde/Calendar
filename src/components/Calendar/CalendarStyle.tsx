import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const CalendarWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const CalendarGrid = styled(Grid)`
  flex-direction: column;
  height: 100%;
`;

const CalendarHeader = styled(Grid)`
  height: 100px;
  background-color: grey;
`;

const CalendarSchedule = styled(Grid)`
  height: calc(100% - 100px);
  background-color: lightgrey;
`;

export { CalendarWrapper, CalendarGrid, CalendarSchedule, CalendarHeader };
