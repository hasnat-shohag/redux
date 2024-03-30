import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/CounterSlice";

// store all the reducer by using property of reducer object
const store = configureStore({
	reducer: {
		counter: CounterReducer,
	},
});

export default store;
