import {combineReducers, configureStore} from "@reduxjs/toolkit";
import vote from "./slice/Vote";

const rootReducer = combineReducers({
    voteSlice : vote
})

export const store = configureStore({
    reducer: rootReducer,
})