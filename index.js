// state
// dispatch
// reducer
// store - getState(), dispatch(), subscribe()

// state
const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const ADD_USER = "addUser";
const GET_ALL_USER = "getAllUsers";

const initialState = { users: ["Hayat"], count: 1 };

// action function -> object type -> payload

const addUser = (value) => {
	return {
		type: ADD_USER,
		payload: value,
	};
};

const getAllUsers = () => {
	return {
		type: GET_ALL_USER,
	};
};

// create a reducer
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				users: [...state.users, action.payload],
				count: state.count + 1,
			};
		case GET_ALL_USER:
			return {
				users: state.users,
			};
		default:
			return state;
	}
};

// create a store
const store = createStore(counterReducer, applyMiddleware(logger));

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(addUser("Hasnat"));
// store.dispatch(addUser("Sohan"));

store.dispatch(getAllUsers());
