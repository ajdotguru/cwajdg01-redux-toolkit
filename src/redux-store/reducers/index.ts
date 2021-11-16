import { combineReducers } from '@reduxjs/toolkit';
import { postsReducer, usersReducer } from 'redux-store/slices';

export const rootReducer = combineReducers({
	posts: postsReducer,
	users: usersReducer,
});
