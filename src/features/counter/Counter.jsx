import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const handleClickIncrement = () => {
		dispatch(increment());
	};

	const handleClickDecrement = () => {
		dispatch(decrement());
	};

	const handleClickReset = () => {
		dispatch(reset ());
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
