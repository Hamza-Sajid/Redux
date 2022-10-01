import { create } from "@mui/material/styles/createTransitions";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

export const CounterReducer = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state)=>
            {
                state.count+=1;
            },

        decrement: (state)=>
            {
                state.count-=1;
            },

            reset: (state)=>
            {
                state.count=0;
            },

        input:(state,action)=>
        {
            state.count=action.payload;
        }

    }
})


export const {increment,decrement, reset ,input} = CounterReducer.actions;

export default CounterReducer.reducer;