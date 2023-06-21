import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../service/user/users.service";

export const getUsers = createAsyncThunk("users/getUsers", async ({rejectWithValue}) => {
  try {
    const { data } = await fetchUsers();
    return data.slice(0,5);
  } 
  catch (error) {
    console.log(error);
      return rejectWithValue(error);

  }
});

