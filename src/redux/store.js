import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./form";

export default configureStore({
  reducer: { FormReducer },
});
