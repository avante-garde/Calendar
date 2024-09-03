import { TimeBlockEvent } from "../components/Calendar/CalendarSchedule/TimeBlock/AddEvent";

const FETCH_EVENTS = "FETCH_EVENTS";
const POST_EVENT = "POST_EVENT";

const fetchEventsAction = (events: TimeBlockEvent[]): FetchAction => {
  return {
    type: FETCH_EVENTS,
    events,
  }
};

const postEventAction = (event: TimeBlockEvent): PostAction => {
  return {
    type: POST_EVENT,
    event,
  };
};

export const fetchEvents = () => {
  return async(
    dispatch: (args: FetchAction) => void,
  ): Promise<void> => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json;",
          "Access-Control-Allow-Origin": "*",
        }
      };
      const events = await fetch("http://localhost:8080/api/event/", options)
      .then(
        (res) => res.json(),
      );
      dispatch(fetchEventsAction(events));
    } catch (e: unknown) {
      console.error("Error fetching events")
    }
  };
};

export const postEvent = (event: TimeBlockEvent) => {
  return async (
    dispatch: (args: PostAction) => void,
  ): Promise<void> => {
    try {
      dispatch(postEventAction(event));

      const options = {
        method: "POST",
        body: JSON.stringify({
          title: event.eventTitle,
          description: event.eventDescription,
          location: event.eventLocation,
          guests: event.eventGuests,
          startDate: event.startDate,
          endDate: event.endDate,
        }),
        headers: { 
          "Content-type": "application/json;",
          "Access-Control-Allow-Origin": "*",
        }
      };

      const responseText = await fetch("http://localhost:8080/api/event/", options)
      .then(
        (res) => res.json(),
      );
    } catch (e: unknown) {
      console.error("Error fetching events.");
    }
  };
};

interface PostAction {
  type: string;
  event: TimeBlockEvent;
}

interface FetchAction {
  type: string;
  events: TimeBlockEvent[];
}

type Actions = PostAction & FetchAction;

const eventsReducer = (
  state: TimeBlockEvent[] = [],
  action: Actions,
): TimeBlockEvent[] => {
  switch (action.type) {
    case FETCH_EVENTS:
      return [...action.events];
    case POST_EVENT:
      return [...state, action.event];
    default:
      return state;
  }
};

export default eventsReducer;
