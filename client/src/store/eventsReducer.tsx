import { TimeBlockEvent } from "../components/Calendar/CalendarSchedule/TimeBlock/AddEvent";

const ADD_EVENT = "ADD_EVENT";

export const postEventAction = (event: TimeBlockEvent) => {
  return {
    type: ADD_EVENT,
    event,
  };
};

interface Actions {
  type: string;
  event: TimeBlockEvent;
}

const eventsReducer = (
  state: TimeBlockEvent[] = [],
  action: Actions,
): TimeBlockEvent[] => {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.event];
    default:
      return state;
  }
};

export default eventsReducer;
