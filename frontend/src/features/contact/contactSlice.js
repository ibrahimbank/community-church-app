import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import contactService from "./contactService";

const initialState = {
  contact: [],
  isError: false,
  isLoading: false,
  isSucsess: false,
  message: "",
};

export const createMessage = createAsyncThunk(
  "contact/create",
  async (contactData, thunkAPI) => {
    try {
      return await contactService.contactMessage(contactData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucsess = true;
        state.contact = action.payload;
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSucsess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = contactSlice.actions;
export default contactSlice.reducer;
