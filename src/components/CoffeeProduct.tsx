import { faStar as faStarDuotone } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
interface CoffeeProductProps {
  id: number;
  name: string;
  isPopular: boolean;
  imgSrc: string;
  starRating: number;
  totalVotes: number;
  price: string;
  isAvailable: boolean;
}
export function CoffeeProduct(props: CoffeeProductProps) {
  return (
    <div className="relative">
      <div className="flex flex-col gap-2">
        <img src={props.imgSrc} alt="image" className="rounded-xl" />
        <div className="flex flex-row justify-between items-center">
          <p className="text-[16px] font-bold">{props.name}</p>
          <p className="text-[14px] text-black font-bold p-1 px-2 rounded-md bg-[#BEE3CC]">
            {props.price}
          </p>
        </div>
        <div className="flex flex-row items-center justify-start">
          {props.starRating !== null ? (
            <>
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#F6C768] border-none pr-2"
              />
              {Number.isInteger(props.starRating) ? (
                <p className="text-[15px]">{`${props.starRating.toFixed(1)}`}</p>
              ) : (
                <p className="text-[15px]">{`${props.starRating}`}</p>
              
              )}
              <p className="text-[#6F757C] text-[15px]">{`(${props.totalVotes} votes)`}</p>
            </>
          ) : (
            <>
            <FontAwesomeIcon
                icon={faStar}
                className="text-[#6F757C] border-none pr-2"

              />
              <p className="text-[#6F757C] text-[15px] ">No ratings</p>
            </>
          )}

        </div>

      </div>
      {props.isPopular === true ? (
        <p className="absolute rounded-lg text-[12px] top-1 left-2 p-1 px-2 bg-[#F6C768] text-black">popular</p>
      ): (
        <></>
      )}
    </div>
  );
}
