import React from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleAddcoin, handleremovecoin } from "../store/watchlistSlice";
import { MdOutlineStar } from "react-icons/md";
const Card = ({ item, checker }) => {
  const watchlistData = useSelector(function (store) {
    return store.watchlist;
  });
  const isPresent = (element, array) =>
    array.some((obj) => JSON.stringify(obj) === JSON.stringify(element));

  const starRenderingLogic = isPresent(item, watchlistData);

  console.log(starRenderingLogic);

  const dispatch = useDispatch();

  function addCoin() {
    dispatch(handleAddcoin(item));
  }

  function removeCoin() {
    dispatch(handleremovecoin(item));
  }

  return (
    <div className="w-full mt-5  bg-cyan-100 border shadow-lg gap-5 rounded-md py-4 px-5 flex flex-col">
      <div className="flex gap-4 items-center ">
        <abbr className="w-1/6" title="Click here to know more.">
          <Link to={`/coin/${item.id}`}>
            {" "}
            <img
              src={checker === "top10" ? item.thumb : item.image}
              alt="Crypto symbol"
            />
          </Link>
        </abbr>
        <div className="flex flex-col w-full">
          <h2 className="text-[20px] font-bold">{item.name}</h2>
          <h2 className="text-[18px] font-semibold text-gray-500">
            {item.symbol}
          </h2>
        </div>
        {!starRenderingLogic ? (
          <MdOutlineStarRate onClick={addCoin} className="text-[50px]" />
        ) : (
          <MdOutlineStar onClick={removeCoin} className="text-[50px]" />
        )}
      </div>

      <div className="flex items-center gap-4 ">
        {checker !== "top10" && (
          <h3 className="border px-2 py-1 text-[22px] rounded-3xl border-green-400 shadow-sm">
            &#x24;{item.price_change_24h}
          </h3>
        )}
        <div className="border p-2 rounded-full border-green-400 shadow-sm">
          {checker === "top10" ? (
            item.data.price_change_percentage_24h.usd > 0 ? (
              <FaArrowTrendUp />
            ) : (
              <FaArrowTrendDown />
            )
          ) : item.ath_change_percentage > 0 ? (
            <FaArrowTrendUp />
          ) : (
            <FaArrowTrendDown />
          )}
        </div>
      </div>

      <h3 className="text-[28px] font-bold text-green-400">
        {" "}
        &#x24;
        {checker === "top10"
          ? Math.round(item.data.price * 1000) / 1000
          : Math.round(item.current_price * 1000) / 1000}
      </h3>
      <div>
        <div>
          Total Volume:{" "}
          {checker === "top10" ? item.data.total_volume : item.total_volume}
        </div>
        <div>
          Market capcity:
          {checker === "top10" ? item.data.market_cap : item.market_cap}
        </div>
      </div>
    </div>
  );
};

export default Card;
