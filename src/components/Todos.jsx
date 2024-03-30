import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTodos from "../services/actions/TodosActions";

const Todos = () => {
	const { isLoading, todos, error } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTodos);
	}, [dispatch]);

	console.log(todos);
	return (
		<div className="text-center">
			<h3>Todo App</h3>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error?.message}</p>}
			{!isLoading &&
				todos.map((todo) => {
					return (
						<p key={todo.id} className="pl-5">
							Name: {todo.name}
						</p>
					);
				})}
		</div>
	);
};

export default Todos;
