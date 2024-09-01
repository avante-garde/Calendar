import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  MouseEventHandler,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import {
  AddEventDialog,
  DialogEventTab,
  DialogHeader,
  DialogInfo,
  DialogSelectedDateAndTime,
  DialogTabs,
  DialogTaskTab,
  InputEventName,
  DialogDragHandleIconWrapper,
  DialogExitIconWrapper,
  DialogDragHandleIcon,
  DialogExitIcon,
  DialogFindDiffTime,
  DialogAdd,
  TabList,
  TabListIconWrapper,
  TabListAction,
  DialogAddWrapper,
  DialogTabsWrapper,
  SaveButton,
  SaveButtonWrapper,
} from "./style";
import { ICurrentWeekDate } from "../../../../../App";
import { months } from "../../../../../constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../main";
import { postEventAction } from "../../../../../store/eventsReducer";

interface AddEventProps {
  currentDayAddEvent: ICurrentWeekDate | undefined;
  currentTimeSelected: string | undefined;
  left: number;
  top: number;
  setIsEventDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export interface TimeBlockEvent {
  currEventDayOfWeek: string;
  currEventMonth: string;
  currEventDayNumber: number;
  currEventYear: number;
  startTime: string | undefined;
  endTime?: string;
  eventTitle: string;
  eventGuests: string;
  eventLocation: string;
  eventDescription: string;
  xCoordinate?: number;
  yCoordinate: number;
}

const AddEvent = (props: AddEventProps) => {
  const {
    currentDayAddEvent,
    currentTimeSelected,
    left,
    top,
    setIsEventDialogOpen,
  } = props;
  const dispatchToStore = useDispatch<AppDispatch>();
  const addEventDialogRef = useRef<HTMLFormElement>(null);
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventGuests, setEventGuests] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");

  const handleEventTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventTitle(event.target.value);
  };

  const handleEventAddGuestsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventGuests(event.target.value);
  };

  const handleEventAddLocationChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setEventLocation(event.target.value);
  };

  const handleEventAddDescChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventDescription(event.target.value);
  };

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('submitted.');

      if (currentDayAddEvent) {
        const event: TimeBlockEvent = {
          currEventDayOfWeek: currentDayAddEvent.name,
          currEventMonth: months[currentDayAddEvent.date.getMonth()],
          currEventDayNumber: currentDayAddEvent.date.getDate(),
          currEventYear: currentDayAddEvent.date.getFullYear(),
          startTime: currentTimeSelected,
          eventTitle,
          eventGuests,
          eventLocation,
          eventDescription,
          yCoordinate: top,
        };
        dispatchToStore(postEventAction(event));

        setIsEventDialogOpen(false);
      }
    },
    [
      currentDayAddEvent,
      eventTitle,
      eventGuests,
      eventLocation,
      eventDescription,
      setIsEventDialogOpen,
    ],
  );

  return (
    <AddEventDialog
      id="add-event-dialog-form"
      left={left}
      top={top}
      ref={addEventDialogRef}
      onClick={(e: any) => {
        e.stopPropagation();
      }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <DialogInfo id="dialog-info">
        <DialogHeader id="dialog-header">
          <DialogDragHandleIconWrapper id="dialog-drag-handle-icon-wrapper">
            <DialogDragHandleIcon id="dialog-drag-handle-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M20,9H4v2h16V9z M4,15h16v-2H4V15z" />
                    </g>
                  </g>
                </g>
              </svg>
            </DialogDragHandleIcon>
          </DialogDragHandleIconWrapper>
          <DialogExitIconWrapper
            id="dialog-exit-icon-wrapper"
            onClick={() => setIsEventDialogOpen(false)}
          >
            <DialogExitIcon id="dialog-exit-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
            </DialogExitIcon>
          </DialogExitIconWrapper>
        </DialogHeader>
        <InputEventName
          id="input-event-name"
          label="Add title"
          variant="standard"
          onChange={handleEventTitleChange}
        ></InputEventName>
        <DialogTabsWrapper id="dialog-tabs-wrapper">
          <TabListIconWrapper />
          <DialogTabs id="dialog-tabs">
            <DialogEventTab id="dialog-event-tab">Event</DialogEventTab>
            <DialogTaskTab id="dialog-task-tab">Tab</DialogTaskTab>
          </DialogTabs>
        </DialogTabsWrapper>
        <TabList id="tab-list">
          <DialogSelectedDateAndTime id="dialog-selected-date-and-time">
            <TabListIconWrapper id="tab-list-icon-wrapper" />
            <TabListAction id="tab-list-action">
              {currentDayAddEvent && currentTimeSelected && (
                <span style={{ paddingLeft: "5px" }}>
                  <span id="day-name" style={{}}>
                    {currentDayAddEvent.name},
                  </span>
                  <span style={{ marginLeft: "4px" }}>
                    {months[currentDayAddEvent.date.getMonth()]}
                  </span>
                  <span style={{ marginLeft: "4px" }}>
                    {currentDayAddEvent.date.getDate()}
                  </span>
                  <span style={{ marginLeft: "15px" }}>
                    {currentTimeSelected}
                  </span>
                </span>
              )}
            </TabListAction>
          </DialogSelectedDateAndTime>
          <DialogFindDiffTime id="dialog-find-diff-time">
            <TabListIconWrapper id="tab-list-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
            </TabListIconWrapper>
            <TabListAction id="tab-list-action">
              <span style={{ paddingLeft: "5px" }}>Find a Time</span>
            </TabListAction>
          </DialogFindDiffTime>
          <DialogAddWrapper id="dialog-add-wrapper">
            <TabListIconWrapper id="tab-list-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
              </svg>
            </TabListIconWrapper>
            <TabListAction id="tab-list-action">
              <DialogAdd
                id="dialog-add-guests"
                label="Add guests"
                variant="filled"
                onChange={handleEventAddGuestsChange}
              />
            </TabListAction>
          </DialogAddWrapper>
          <DialogAddWrapper id="dialog-add-wrapper">
            <TabListIconWrapper id="tab-list-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </TabListIconWrapper>
            <TabListAction id="tab-list-action">
              <DialogAdd
                id="dialog-add"
                label="Add location"
                variant="filled"
                onChange={handleEventAddLocationChange}
              />
            </TabListAction>
          </DialogAddWrapper>
          <DialogAddWrapper id="dialog-add-wrapper">
            <TabListIconWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" />
              </svg>
            </TabListIconWrapper>
            <TabListAction id="tab-list-action">
              <DialogAdd
                id="dialog-add"
                label="Add description or attachments"
                variant="filled"
                onChange={handleEventAddDescChange}
              />
            </TabListAction>
          </DialogAddWrapper>
          <DialogAddWrapper id="dialog-add-wrapper">
            <TabListIconWrapper id="tab-list-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M12,22H5c-1.11,0-2-0.9-2-2L3.01,6c0-1.1,0.88-2,1.99-2h1V2h2v2h8V2h2v2h1c1.1,0,2,0.9,2,2v6h-2v-2H5v10h7V22z M22.13,16.99 l0.71-0.71c0.39-0.39,0.39-1.02,0-1.41l-0.71-0.71c-0.39-0.39-1.02-0.39-1.41,0l-0.71,0.71L22.13,16.99z M21.42,17.7l-5.3,5.3H14 v-2.12l5.3-5.3L21.42,17.7z" />
              </svg>
            </TabListIconWrapper>
            <TabListAction id="tab-list-action">
              <DialogAdd label="Edit user status" variant="filled"></DialogAdd>
            </TabListAction>
          </DialogAddWrapper>
          <SaveButtonWrapper id="save-button-wrapper">
            <SaveButton id="save-button" type="submit">
              Save
            </SaveButton>
          </SaveButtonWrapper>
        </TabList>
      </DialogInfo>
    </AddEventDialog>
  );
};

export default AddEvent;
