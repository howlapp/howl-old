import { createSlice } from "@reduxjs/toolkit";

interface CachedUser {
	name: string;
}

type UserCacheState = Record<string, CachedUser>;

export const userCache = createSlice({
	name: "userCache",
	initialState: {} as UserCacheState,
	reducers: {},
});
