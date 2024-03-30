import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/CounterSlice";
import PostReducer from "../features/posts/PostSlice";

// store all the reducer by using property of reducer object
const store = configureStore({
	reducer: {
		counter: CounterReducer,
		posts: PostReducer,
	},
});

export default store;
