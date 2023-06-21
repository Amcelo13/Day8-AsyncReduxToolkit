import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserPost } from '../../service/user/users.service';
export const getUserPost = createAsyncThunk(
  'post/getUserPost',
  async (id, {rejectWithValue}) => {
    try {
      const { data } = await fetchUserPost(id);
      return data;

    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);