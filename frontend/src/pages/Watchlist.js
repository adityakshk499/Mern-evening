import React, { useEffect } from "react";

import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const user = useSelector((store) => store.user);
  const watchlistData = useSelector((store) => store.watchlist);
  var navigate = useNavigate();

  useEffect(() => {
    if (user === "") {
      navigate("/");
    }
  }, [user]);

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
