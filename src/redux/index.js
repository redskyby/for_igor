import {combineReducers, configureStore} from "@reduxjs/toolkit";
import vote from "./slice/Vote";

const rootReducer = combineReducers({
    voteToolkit : vote
})

export const store = configureStore({
    reducer: rootReducer,
})