import { createAsyncThunk } from '@reduxjs/toolkit'
import { IPost } from 'models/types'
import { axiosInstance } from 'utils/axios'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const { data } = await axiosInstance.get<IPost[]>(`/posts`)

    return data
  }
)


export const fetchPostById = createAsyncThunk(
  'posts/fetchPostById',
  async (postId, thunkAPI) => {
    const { data } = await axiosInstance.get<IPost>(`/posts?id=${postId}`)

    return data
  }
)
