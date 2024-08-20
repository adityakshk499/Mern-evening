import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";

const Watchlist = () => {
  const watchlistData = useSelector((store) => store.watchlist);
  console.log(watchlistData);

  return watchlistData.length === 0 ? (
    <div>No data in wathlist </div>
  ) : (
    <div>
      {" "}
      <Cards apiData={watchlistData} />{" "}
    </div>
  );
};

export default Watchlist;
