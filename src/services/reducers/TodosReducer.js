import {
	GET_TODOS_REQUEST,
	GET_TODOS_SUCCESS,
	GET_TODOS_FAILED,
} from "../constants/TodosConstants";

const initailState = {
	todos: [],
	isLoading: false,
	error: null,
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
		case GET_TODOS_FAILED: {
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

export default todoReducer;
