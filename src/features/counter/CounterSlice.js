// configuration: name of the reducer, initialState and define reeducer

import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {
		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
		reset: (state) => {
			state.count = 0;
		},
	},
});

// define actions functions by slice.actions
export const { increment, decrement, reset } = CounterSlice.actions;

// export default as reducer
export default CounterSlice.reducer;
