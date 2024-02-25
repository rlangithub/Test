import { createSlice } from "@reduxjs/toolkit";
const initValue = {
    prosecutors: [
        {profile:"תובע", name: "רבקה לנג"},
        {profile:"עורר", name: "נחמי לנג"}
    ]    
};

const ProsecutorsSlice = createSlice({
    name: "prosecutors",
    initialState:initValue,
    reducers:{
        getProsecutors:(state,actions)=>{
            state.prosecutors = actions.payload.res;
        }
    }
});

export const {getProsecutors} = ProsecutorsSlice.actions;
export default ProsecutorsSlice.reducer;