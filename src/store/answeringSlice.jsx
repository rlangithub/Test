import { createSlice } from "@reduxjs/toolkit";
const initValue = {
    answerings: [
        {profile:"משיב", name: "רבקה לנג"}
    ]    
};

const AnsweringsSlice = createSlice({
    name: "answerings",
    initialState:initValue,
    reducers:{
        getAnswerings:(state,actions)=>{
            state.answerings = actions.payload.res;
        }
    }
});

export const {getAnswerings} = AnsweringsSlice.actions;
export default AnsweringsSlice.reducer;