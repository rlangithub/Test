import { createSlice } from "@reduxjs/toolkit";
const initValue = {
    judges: [
        {profile:"עורך דין", name: "רבקה לנג"},
        {profile:"עורך דין", name: "נחמי לנג"}
    ]    
};

const JudgeSlice = createSlice({
    name: "judges",
    initialState:initValue,
    reducers:{
        getJudges:(state,actions)=>{
            state.judges = actions.payload.res;
        }
    }
});

export const {getJudges} = JudgeSlice.actions;
export default JudgeSlice.reducer;