import { combineReducers } from '@reduxjs/toolkit';
import { postsReducer } from 'redux-store/slices';

export const rootReducer = combineReducers({
	posts: postsReducer,
});
