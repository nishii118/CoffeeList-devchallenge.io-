import { configureStore } from "@reduxjs/toolkit"
import CoffeeListReducer from "./CoffeeListSlice"
const store = configureStore({
  reducer: {
    coffeeList: CoffeeListReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;