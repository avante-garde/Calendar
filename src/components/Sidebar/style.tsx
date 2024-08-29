import styled from "@emotion/styled";
import { DateCalendar } from "@mui/x-date-pickers";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const CreateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  width: 142px;
  margin-left: 20px;
  box-shadow:
    0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  border-radius: 24px;
`;

const CreateButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const CreateButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 147px;
  border: 1px solid rgb(241, 243, 244);
  border-radius: 24px;
  background-color: white;
`;

const GoogleAddIcon = styled.svg``;

const CreateButtonText = styled.div``;

const ArrowDropDown = styled(ArrowDropDownIcon)``;

const SidebarCalendarWrapper = styled.div`
  height: 300px;
  width: 230px;
  margin-right: 20px;
`;

const SidebarCalendar = styled(DateCalendar)`
  height: 300px;
  width: 200px;

  & .MuiPickersCalendarHeader-root {
    width: 190px;
    margin: 0;
    padding-left: 10px;
  }

  &
    .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.MuiPickersCalendarHeader-switchViewButton {
    // display: none;
  }

  &
    .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button.MuiPickersArrowSwitcher-nextIconButton {
    width: 24px;
  }

  &
    .MuiSvgIcon-root.MuiSvgIcon-fontSizeInherit.MuiPickersArrowSwitcher-leftArrowIcon {
    height: 18px;
    color: #3c4043;
  }

  &
    .MuiSvgIcon-root.MuiSvgIcon-fontSizeInherit.MuiPickersArrowSwitcher-rightArrowIcon {
    height: 18px;
    color: #3c4043;
  }

  & .MuiPickersCalendarHeader-label {
    font-size: 14px;
    font-weight: 500;
    color: #3c4043;
  }

  & .MuiPickersArrowSwitcher-spacer {
    width: 24px;
  }

  & .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel {
    font-size: 10px;
    font-weight: 600;
    color: #70757a;
  }

  & .MuiButtonBase-root.MuiPickersDay-root.MuiPickersDay-dayWithMargin {
    font-size: 10px;
    font-weight: 500;
  }
`;

export {
  SidebarWrapper,
  CreateButtonContainer,
  CreateButtonWrapper,
  GoogleAddIcon,
  CreateButton,
  CreateButtonText,
  ArrowDropDown,
  SidebarCalendarWrapper,
  SidebarCalendar,
};
