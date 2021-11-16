import { createSlice } from '@reduxjs/toolkit';
import { addUser, loginUser } from 'redux-store/thunks';
import { IUser } from 'models/types';

interface IInitialState {
	user: Omit<IUser, 'password'> | null;
	addUserLoading: boolean;
	loginUserLoading: boolean;
}

const initialState: IInitialState = {
	user: null,
	addUserLoading: false,
	loginUserLoading: false,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(addUser.pending, (state, action) => {
			state.addUserLoading = true;
		});
		builder.addCase(addUser.fulfilled, (state, action) => {
			state.addUserLoading = false;
		});
		builder.addCase(loginUser.pending, (state, action) => {
			state.loginUserLoading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			const { id, userName } = action.payload[0] ?? {};

			state.loginUserLoading = false;
			state.user = { id, userName };
		});
	},
});

export const usersReducer = usersSlice.reducer;
