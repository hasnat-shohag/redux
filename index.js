// state
// dispatch
// reducer
// store - getState(), dispatch(), subscribe()

// state
const { createStore } = require("redux");

const ADD_USER = "addUser";

const initialState = { users: ["Hayat"], count: 1 };

// action function -> object type -> payload

const addUser = (value) => {
	return {
		type: ADD_USER,
		payload: value,
	};
};

// create a reducer
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload],
				count: state.count + 1,
			};
		default:
			state;
	}
};

// create a store
const store = createStore(counterReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(addUser("Hasnat"));
store.dispatch(addUser("Sohan"));
