import { createSlice } from "@reduxjs/toolkit";
import prosecutor from '../assets/img/prosecutor.png';
const initValue = {
    prosecutors: [
        { profile: "עורר", name: "יעקב יעקובי", src: prosecutor }

    ]
};

const ProsecutorsSlice = createSlice({
    name: "prosecutors",
    initialState: initValue,
    reducers: {
        getProsecutors: (state, actions) => {
            state.prosecutors = actions.payload.res;
        }
    }
});

export const { getProsecutors } = ProsecutorsSlice.actions;
export default ProsecutorsSlice.reducer;