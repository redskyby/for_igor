import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    opinion1: 31,
    opinion2: 0,
    opinion3: 1
}

const voteSlice = createSlice({
    name: 'vote',
    initialState,
    reducers: {
        CHANGE_FIRST_OPINION: (state) => {
            state.opinion1 += Number(1);
        },
        CHANGE_SECOND_OPINION: (state) => {
            state.opinion2 += Number(1);
        },
        CHANGE_THIRD_OPINION: (state) => {
            state.opinion3 += Number(1);
        }
    }
});

export default voteSlice.reducer;
export const {
    CHANGE_FIRST_OPINION,
    CHANGE_SECOND_OPINION,
    CHANGE_THIRD_OPINION
} = voteSlice.actions;