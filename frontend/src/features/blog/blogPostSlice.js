import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogPostService from "./blogPostService";

const initialState = {
  blog: [],
  oneBlog: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//getting all the blog
export const getBlogPost = createAsyncThunk(
  "blog/blogPosts",
  async (_, thunkAPI) => {
    try {
      return await blogPostService.blogPosts();
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

//getting a blog
export const singlePost = createAsyncThunk(
  "blog/blogPost",
  async (blogId, thunkAPI) => {
    try {
      return await blogPostService.singlePost(blogId);
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

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogPost.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getBlogPost.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(singlePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singlePost.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.oneBlog = action.payload;
      })
      .addCase(singlePost.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
