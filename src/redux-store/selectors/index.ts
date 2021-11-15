import type { RootState } from 'redux-store/store'

export const selectPosts = (state: RootState) => state.posts.posts
