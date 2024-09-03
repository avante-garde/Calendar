import { TimeBlockEvent } from "../components/Calendar/CalendarSchedule/TimeBlock/AddEvent";

export interface EventModel {
  title: string;
  guests: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
}

const FETCH_EVENTS = "FETCH_EVENTS";
const POST_EVENT = "POST_EVENT";

const fetchEventsAction = (events: EventModel[]): FetchAction => {
  return {
    type: FETCH_EVENTS,
    events,
  };
};

const postEventAction = (event: TimeBlockEvent): PostAction => {
  return {
    type: POST_EVENT,
    event,
  };
};

export const fetchEvents = () => {
  return async (dispatch: (args: FetchAction) => void): Promise<void> => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json;",
          "Access-Control-Allow-Origin": "*",
        },
      };
      const events: EventModel[] = await fetch(
        "http://localhost:8080/api/event/",
        options,
      ).then((res) => res.json());
      dispatch(fetchEventsAction(events));
    } catch (e: unknown) {
      console.error("Error fetching events");
    }
  };
};

export const postEvent = (event: TimeBlockEvent) => {
  return async (dispatch: (args: PostAction) => void): Promise<void> => {
    try {
      dispatch(postEventAction(event));

      console.log("even");

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
        },
      };

      const responseText = await fetch(
        "http://localhost:8080/api/event/",
        options,
      ).then((res) => res.json());
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
  events: EventModel[];
}

export type EventsUnionType = TimeBlockEvent[] | EventModel[];

export type EventsIntersectionType = TimeBlockEvent[] & EventModel[];

type Actions = PostAction & FetchAction;

// TODO: Handle the correct typing of events.
// TODO(maybe): Split the fetch and post into reduxjs/toolkit slices.
const eventsReducer = (state: any = [], action: Actions): any => {
  switch (action.type) {
    case FETCH_EVENTS:
      return [...state, ...action.events];
    case POST_EVENT:
      return [...state, action.event];
    default:
      return state;
  }
};

export default eventsReducer;
