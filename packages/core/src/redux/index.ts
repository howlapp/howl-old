import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userCache } from "./features/userCache";

export const store = configureStore({
	reducer: combineReducers(userCache.reducer),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./hooks";
export * from "./features";
