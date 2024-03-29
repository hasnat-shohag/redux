// state
// action
// reducer
// store

const axios = require("axios");
const { applyMiddleware, createStore } = require("redux");
const thunk = require("redux-thunk").default;

const API_URL = "https://jsonplaceholder.typicode.com/users";
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAIL = "GET_TODOS_FAIL";

const initailState = {
	todos: [],
	isLoading: false,
	error: null,
};

const getTodosRequest = () => {
	return {
		type: GET_TODOS_REQUEST,
	};
};

const getTodosSuccess = (value) => {
	return {
		type: GET_TODOS_SUCCESS,
		payload: value,
	};
};

const getTodosFail = (error) => {
	return {
		type: GET_TODOS_FAIL,
		payload: error,
	};
};

const todoReducer = (state = initailState, action) => {
	switch (action.type) {
		case GET_TODOS_REQUEST: {
			return {
				...state,
				isLoading: true,
			};
		}
		case GET_TODOS_SUCCESS: {
			return {
				...state,
				todos: action.payload,
				isLoading: false,
			};
		}
		case GET_TODOS_FAIL: {
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};

const fetchRequest = (dispatch) => {
	return () => {
		dispatch(getTodosRequest());
		axios
			.get(API_URL)
			.then((response) => {
				dispatch(getTodosSuccess(response.data));
			})
			.catch((error) => {
				dispatch(getTodosFail(error.message));
			});
	};
};

const store = createStore(todoReducer, applyMiddleware(thunk));
// const store = createStore(todoReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(fetchRequest());
// store.dispatch(getTodosRequest());
