import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { IPost, IUser } from 'models/types';
import { axiosInstance } from 'utils/axios';

/* POSTS */
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const { data } = await axiosInstance.get<IPost[]>(`/posts`);

	return data;
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (postId, thunkAPI) => {
	const { data } = await axiosInstance.get<IPost>(`/posts?id=${postId}`);

	return data;
});

/* USERS */
export const addUser = createAsyncThunk<IUser, Omit<IUser, 'id'>>(
	'users/addUser',
	async ({ userName, password }) => {
		const { data } = await axiosInstance.post<IUser>(`/users`, {
			id: uuidv4(),
			userName,
			password,
		});

		return data;
	}
);
