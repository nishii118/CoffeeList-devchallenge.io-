import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCoffeeList = createAsyncThunk("getCoffeeList", async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
});
const CoffeeListSlice = createSlice({
  name: "coffeeList",
  initialState: {
    coffeeList: [],
    stateSelection: "All",
    status: "idle"
  },
  reducers: {
    chooseSelection: (state, action) => {
      state.stateSelection = action.payload;
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoffeeList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCoffeeList.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.coffeeList = action.payload;
    });
    builder.addCase(getCoffeeList.rejected, (state) => { 
      state.status = "rejected";
    });
  }
});

export const CoffeeListActions = CoffeeListSlice.actions;
export default CoffeeListSlice.reducer;
