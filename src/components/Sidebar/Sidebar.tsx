import {
  CreateButton,
  CreateButtonWrapper,
  SidebarCalendar,
  SidebarCalendarWrapper,
  SidebarWrapper,
} from "./SidebarStyle";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <CreateButtonWrapper>
        <CreateButton>+ Create</CreateButton>
      </CreateButtonWrapper>
      <SidebarCalendarWrapper>
        <SidebarCalendar />
      </SidebarCalendarWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
