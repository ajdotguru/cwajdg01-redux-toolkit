import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from 'redux-store/thunks'
import { IPost } from 'models/types'

interface IInitialState {
  posts: IPost[]
}

const initialState: IInitialState = {
  posts: []
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload
    })
  }
})

export const postsReducer = postsSlice.reducer
