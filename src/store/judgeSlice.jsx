import { createSlice } from "@reduxjs/toolkit";
import judge from '../assets/img/judge.png'
const initValue = {
    judges: [
        { profile: "עורך דין", name: "רבקה לנג", type: 1, src: judge }
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