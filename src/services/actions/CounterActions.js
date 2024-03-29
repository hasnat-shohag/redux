import { INCREMENT, DECREMENT, RESET } from "../constants/CounterConstants";

const counterIncrement = () => {
	return {
		type: INCREMENT,
	};
};

const counterDecrement = () => {
	return {
		type: DECREMENT,
	};
};

const counterReset = () => {
	return {
		type: RESET,
	};
};

export { counterIncrement, counterDecrement, counterReset };
