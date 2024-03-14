import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { getCoffeeList } from "../store/CoffeeListSlice";
import { CoffeeProduct } from "./CoffeeProduct";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function CoffeeList() {
  const dispatch = useAppDispatch();
  const coffeeListRaw = useAppSelector((state) => state.coffeeList.coffeeList);
  const isSelection = useAppSelector((state) => state.coffeeList.stateSelection);
  useEffect(() => {
    dispatch(getCoffeeList());
  }, []);

  console.log(isSelection);
  console.log(coffeeListRaw);
  let coffeeList = [];
  if (isSelection === "Available") {
    coffeeList = coffeeListRaw.filter((coffee) => coffee.available === true);
  } else {
    coffeeList = coffeeListRaw;
  }
  console.log(coffeeList);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
      {coffeeList.map((coffee) => {
        return (
          <CoffeeProduct
            id={coffee.id}
            imgSrc={coffee.image}
            isPopular={coffee.popular}
            starRating={coffee.rating}
            totalVotes={coffee.votes}
            isAvailable={coffee.available}
            price={coffee.price}
            name={coffee.name}
          />
        );
      })}
    </div>
  );
}
