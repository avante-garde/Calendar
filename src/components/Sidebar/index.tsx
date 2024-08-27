import { useEffect, useRef } from "react";
import {
  CreateButtonContainer,
  CreateButtonWrapper,
  CreateButton,
  ArrowDropDown,
  SidebarCalendar,
  SidebarCalendarWrapper,
  SidebarWrapper,
  CreateButtonText,
  GoogleAddIcon,
} from "./style";

const Sidebar = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Calendar ref: ", calendarRef);
  }, [calendarRef]);

  return (
    <SidebarWrapper id="sidebar-wrapper">
      <CreateButtonContainer id="create-button-container">
        <CreateButtonWrapper id="create-button-wrapper">
          <CreateButton>
            <GoogleAddIcon width="36" height="36" viewBox="0 0 36 36">
              <path fill="#34A853" d="M16 16v14h4V20z"></path>
              <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
              <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
              <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
              <path fill="none" d="M0 0h36v36H0z"></path>
            </GoogleAddIcon>
            <CreateButtonText>Create</CreateButtonText>
            <ArrowDropDown />
          </CreateButton>
        </CreateButtonWrapper>
      </CreateButtonContainer>
      <SidebarCalendarWrapper id="sidebar-calendar-wrapper">
        <SidebarCalendar ref={calendarRef} />
      </SidebarCalendarWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
