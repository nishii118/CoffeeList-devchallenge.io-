// import { Route, Routes } from "react-router-dom";
import { SelectionButton } from "./components/SelectionButton";
import { CoffeeList } from "./components/CoffeeList";
// import { useDispatch, useSelector } from "react-redux";
import { CoffeeListActions } from "./store/CoffeeListSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
// import { RootState } from "@reduxjs/toolkit/query";
export default function App() {
  const dispatch = useAppDispatch();
  const stateSelection = useAppSelector((state) => state.coffeeList.stateSelection);
  return (
    <div className="bg-[#111315] min-h-screen  text-white pt-32 px-32 font-demisan">
      <div className="bg-[#1B1D1F] flex flex-col justify-center items-center p-32 gap-4 rounded-3xl overflow-auto">
        <h1 className="text-3xl font-bold">Our Collection</h1>
        <p className="text-[#6F757C] max-w-[400px] text-center">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="flex flex-row gap-3">
          <SelectionButton
            isSelection={stateSelection === "All" ? true : false}
            value="All Products"
            onClick={() => {
              dispatch(CoffeeListActions.chooseSelection("All"));
              console.log("All Products")
            }}
          />
          <SelectionButton
            isSelection={stateSelection === "Available" ? true : false}
            value="Available Now"
            onClick={() => {
              dispatch(CoffeeListActions.chooseSelection("Available"));
              console.log("Available")
            }}
          />
        </div>
        <CoffeeList />
      </div>
    </div>
  );
}
