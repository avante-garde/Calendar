import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import styled from "@emotion/styled";
import logger from "redux-logger";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { calendarEventApi } from "./store/services/event.ts";

const rootReducer = combineReducers({
  [calendarEventApi.reducerPath]: calendarEventApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(calendarEventApi.middleware),
});

const AppContainer = styled(App)`
  height: 100%;
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>,
  </StrictMode>,
);

type AppStore = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore>;
