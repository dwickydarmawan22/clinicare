"use client";

import { configureStore } from "@reduxjs/toolkit";
import clinicReducer from "./slice/clinic";

export const store = configureStore({
  reducer: {
    clinic: clinicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
