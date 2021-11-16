import { createSlice } from '@reduxjs/toolkit';
import { addUser } from 'redux-store/thunks';
import { IUser } from 'models/types';

interface IInitialState {
	user: IUser | null;
	addUserLoading: boolean;
}

const initialState: IInitialState = {
	user: null,
	addUserLoading: false,
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
	},
});

export const usersReducer = usersSlice.reducer;
