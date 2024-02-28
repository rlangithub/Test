import { createSlice } from "@reduxjs/toolkit";
import judge from '../assets/img/judge.png'
const initValue = {
    judges: [
        { profile: "שופט", name: "ישראלה ישראלוף", type: 1, src: judge }
    ]
};

const JudgeSlice = createSlice({
    name: "judges",
    initialState: initValue,
    reducers: {
        getJudges: (state, actions) => {
            state.judges = actions.payload.res;
        }
    }
});

export const { getJudges } = JudgeSlice.actions;
export default JudgeSlice.reducer;