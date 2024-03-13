import { configureStore } from "@reduxjs/toolkit"
import CoffeeListReducer from "./CoffeeListSlice"
export const store = configureStore({
  reducer: {
    coffeeList: CoffeeListReducer
  }
})