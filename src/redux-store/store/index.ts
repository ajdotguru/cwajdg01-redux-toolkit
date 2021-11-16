import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'redux-store/reducers';

const store = configureStore({
	reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
