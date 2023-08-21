import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./registerSlice";

  const store= configureStore({
    reducer:{
register:registerSlice
    }
  })
  export default store