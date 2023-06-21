import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostComments } from "../../service/user/users.service";
export const getPostComments = createAsyncThunk(
  "mypost/comments",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await fetchPostComments(id);
      return data.slice(0, 4);
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error)
    }
    
  }
);
