import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostSlice";

const Posts = () => {
	const { isLoading, posts, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
		console.log("first");
	}, []);

	const getRandomDate = (start, end) => {
		return new Date(
			start.getTime() + Math.random() * (end.getTime() - start.getTime())
		);
	};

	// const randomDate = getRandomDate(new Date(2000, 0, 1), new Date());

	return (
		<div className="py-5">
			News App
			<div className="py-5">
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
				{!isLoading &&
					posts.map((post) => {
						return (
							<div key={post.id} className="py-3 text-left px-5">
								<h2 className="text-xl">Title: {post.title}</h2>
								<h3>
									Date:{" "}
									{getRandomDate(
										new Date(2000, 0, 1),
										new Date()
									).toLocaleDateString()}
								</h3>
								<p>{post.body}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Posts;
