import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk function take two arguments
// 1st: "slice name / action name"
// 2nd: async function
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);
	return response.data;
});

const PostSlice = createSlice({
	name: "posts",
	initialState: {
		isLoading: false,
		posts: [],
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
			state.error = null;
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.isLoading = false;
			state.posts = [];
			state.error = action.error.message;
		});
	},
});

export default PostSlice.reducer;
