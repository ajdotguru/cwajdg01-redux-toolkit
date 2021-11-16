import type { RootState } from 'redux-store/store';

/* POSTS */
export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPostsLoading = (state: RootState) => state.posts.postsLoading;

/* USERS */
export const selectUser = (state: RootState) => state.users.user;
