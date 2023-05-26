import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./redux/loginSlice";

const store = configureStore({
  reducer: {
    user: loginSlice,
  },
});
export default store;
