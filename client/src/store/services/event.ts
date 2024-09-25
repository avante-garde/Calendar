// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { CalendarEvent } from './types';

export interface CalendarEvent {
  title: string;
  guests: string;
  location: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

// Define a service using a base URL and expected endpoints
export const calendarEventApi = createApi({
  reducerPath: 'calendarEventApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8080/api',
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json;charset=UTF-8');
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getCalendarEvents: builder.query<CalendarEvent[], void>({
      query: () => 'event/',
    }),
    addCalendarEvent: builder.mutation<CalendarEvent, CalendarEvent>({
      query: (newEvent: CalendarEvent) => ({
        url: 'event/',
        method: 'POST',
        body: newEvent,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetCalendarEventsQuery,
  useAddCalendarEventMutation,
} = calendarEventApi;