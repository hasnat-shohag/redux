import {
	counterIncrement,
	counterDecrement,
	counterReset,
} from "../services/actions/CounterActions";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	const handleClickIncrement = () => {
		dispatch(counterIncrement());
	};

	const handleClickDecrement = () => {
		dispatch(counterDecrement());
	};

	const handleClickReset = () => {
		dispatch(counterReset());
	};

	return (
		<div className="flex justify-center items-center flex-col">
			<h1 className="mb-10 py-2 text-xl">Counter App</h1>
			<div className="flex justify-center items-center w-[300px] h-[300px] rounded-xl bg-gray-100">
				<span className="text-3xl">{count}</span>
			</div>
			<div className="flex gap-12 py-2">
				<button
					onClick={handleClickIncrement}
					className="px-5 py-4 rounded-xl bg-gray-200  text-orange-900"
				>
					+
				</button>
				<button
					onClick={handleClickDecrement}
					disabled={count === 0}
					className="px-5 py-4 rounded-xl  bg-gray-200  text-orange-900"
				>
					-
				</button>
				<button
					onClick={handleClickReset}
					className="px-5 py-4 rounded-xl bg-gray-200  text-orange-900"
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Counter;
