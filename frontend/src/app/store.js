import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import blogReducer from "../features/blog/blogPostSlice";
import contactSlice from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    contact: contactSlice,
  },
});
