import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleClickIncrement = () => {
		setCount(count + 1);
	};

	const handleClickDecrement = () => {
		setCount(count - 1);
	};

	const handleClickReset = () => {
		setCount(0);
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
