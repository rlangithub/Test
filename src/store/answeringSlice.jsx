import { createSlice } from "@reduxjs/toolkit";
import answering from '../assets/img/answering.png'
const initValue = {
    answerings: [
        { profile: "משיב", name: " שושנה שושני", src: answering }
    ]
};

const AnsweringsSlice = createSlice({
    name: "answerings",
    initialState: initValue,
    reducers: {
        getAnswerings: (state, actions) => {
            state.answerings = actions.payload.res;
        }
    }
});

export const { getAnswerings } = AnsweringsSlice.actions;
export default AnsweringsSlice.reducer;