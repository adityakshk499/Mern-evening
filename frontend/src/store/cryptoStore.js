import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice";

export const cryptoStore = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});
