import styled from "@emotion/styled";
import { MenuItem, Select, TextField } from "@mui/material";

interface AddEventDialogProps {
  top: number;
  left: number;
}

const AddEventDialog = styled.form`
  height: 450px;
  width: 420px;
  position: fixed;
  background-color: white;
  border: 1px solid rgb(220, 222, 222);
  border-radius: 5px;
  // top: ${(props: AddEventDialogProps) => props.top}px;
  top: calc(100vh / 3);
  left: ${(props: AddEventDialogProps) => props.left}px;
  margin: 0 10px 0 10px;
  z-index: 1;
`;

const DialogInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  background-color: rgb(241, 243, 244);
  border-radius: 4px 4px 0 0;
`;

const DialogDragHandleIconWrapper = styled.div`
  padding: 8px;

  &:hover {
    background-color: rgb(218, 220, 224);
    border-radius: 20px;
  }
`;

const DialogDragHandleIcon = styled.div`
  height: 100%;
  width: 100%;
  fill: rgb(95, 99, 104);
`;

const DialogExitIconWrapper = styled.div`
  padding: 8px;

  &:hover {
    background-color: rgb(218, 220, 224);
    border-radius: 20px;
  }
`;

const DialogExitIcon = styled.div`
  height: 100%;
  width: 100%;
  fill: rgb(95, 99, 104);
`;

const InputEventName = styled(TextField)`
  width: 300px;
  margin-left: 70px;
`;

const DialogTabsWrapper = styled.div`
  display: flex;
  align-self: flex-start;
`;

const DialogTabs = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  width: 110px;
  margin-top: 15px;
  margin-left: 25px;
  margin-bottom: 5px;
  color: rgb(95, 99, 104);
`;

const DialogEventTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 35px;
  width: 50px;
  background-color: rgb(232, 240, 254);
  color: rgb(25, 103, 210);
  font-size: 14px;
  font-weight: 500px;
  letter-spacing: 0.25px;
  text-transform: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(241, 243, 244);
  }
`;

const DialogTaskTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  width: 50px;
  font-size: 14px;
  font-weight: 500px;
  letter-spacing: 0.25px;
  text-transform: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(241, 243, 244);
  }
`;

const DialogSelectedDateAndTime = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
`;

const DialogFindDiffTime = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  color: rgb(26, 115, 232);
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
`;

const DialogAddWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const DialogAdd = styled(TextField)`
  height: 35px;
  width: 250px;
  margin-top: 5px;
  border-radius: 5px;

  &
    .MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-colorPrimary.MuiInputBase-formControl {
    height: 100%;
    width: 100%;
    border: none;
    background-color: transparent;
  }

  &
    .MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-colorPrimary.MuiInputBase-formControl {
    &::before {
      border-bottom: 0;
    }
  }

  & .MuiInputBase-input.MuiFilledInput-input {
    padding: 0 0 0 12px;
    font-size: 14px;
  }

  &
    .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-sizeMedium.MuiInputLabel-filled.MuiFormLabel-colorPrimary.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-sizeMedium.MuiInputLabel-filled {
    padding: 0;
    top: -12px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const TabList = styled.div`
  height: 300px;
  width: 370px;
`;

const TabListIconWrapper = styled.div`
  padding: 8px;
  width: 44px;
  fill: rgb(95, 99, 104);
`;

const TabListAction = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 44px);
`;

const SaveButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

const SaveButton = styled.button`
  border: 0;
  justify-self: end;
  height: 30px;
  width: 70px;
  background-color: #8d31f2;
  color-scheme: light;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.15px;

  &:hover {
    opacity: 0.75;
  }
`;

const SelectTime = styled(Select)`
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  height: 20px;

  .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input {
    padding-right: 0;
  }

  & div {
    padding: 0;
  }

  & svg {
    display: none;
  }

  & fieldset {
    display: none;
  }
`;

const SelectTimeOptions = styled(MenuItem)`
  height: 30px;
  font-size: 14px;
  font-weight: 500;
`;

export {
  AddEventDialog,
  DialogHeader,
  DialogDragHandleIconWrapper,
  DialogDragHandleIcon,
  DialogExitIconWrapper,
  DialogExitIcon,
  DialogInfo,
  InputEventName,
  DialogTabsWrapper,
  DialogTabs,
  DialogEventTab,
  DialogTaskTab,
  DialogSelectedDateAndTime,
  DialogFindDiffTime,
  DialogAdd,
  TabList,
  TabListIconWrapper,
  TabListAction,
  DialogAddWrapper,
  SaveButtonWrapper,
  SaveButton,
  SelectTime,
  SelectTimeOptions,
};
