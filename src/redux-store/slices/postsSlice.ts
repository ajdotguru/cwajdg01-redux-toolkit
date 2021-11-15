import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from 'redux-store/thunks'
import { IPost } from 'models/types'

interface IInitialState {
  posts: IPost[],
  postsLoading: boolean
}

const initialState: IInitialState = {
  posts: [],
  postsLoading: false
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.posts = []
      state.postsLoading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload
      state.postsLoading = false
    })
  }
})

export const postsReducer = postsSlice.reducer
