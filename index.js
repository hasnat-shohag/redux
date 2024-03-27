// state
// dispatch
// reducer
// store - getState(), dispatch(), subscribe()

// state
const { createStore } = require("redux");

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

const initialState = { count: 0 };

// action function -> object type -> payload
const incrementCounter = () => {
	return { type: INCREMENT };
};

const decrementCounter = () => {
	return { type: DECREMENT };
};

const resetCounter = () => {
	return { type: RESET };
};

// create a reducer
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		case RESET:
			return { ...state, count: 0 };
		default:
			state;
	}
};

// create a store
const store = createStore(counterReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(decrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounter());
