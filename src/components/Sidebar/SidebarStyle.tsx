import styled from "@emotion/styled";
import { DateCalendar } from "@mui/x-date-pickers";

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const CreateButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 100%;
`;

const CreateButton = styled.button`
  height: 40px;
  width: 140px;
`;

const SidebarCalendarWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const SidebarCalendar = styled(DateCalendar)`
  height: 300px;
  width: 240px;
`;

export {
  SidebarWrapper,
  CreateButtonWrapper,
  CreateButton,
  SidebarCalendarWrapper,
  SidebarCalendar,
};
