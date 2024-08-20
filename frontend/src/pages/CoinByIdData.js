import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const CoinByIdData = () => {
  console.log(useParams());
  const { id } = useParams();
  const [like, setLike] = useState(0);
  const [data, setData] = useState({});
  var count = useRef(0);
  var count2 = 0;

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, [id]);

  function increment() {
    console.log(count, count2);
    count.current = count.current + 1;
    count2 = count2 + 1;
  }

  return (
    <>
      <h1 className="text-[60px]">CoinByIdData</h1>
      <button onClick={increment}>Hello</button>
      <button onClick={() => setLike(like + 1)}>Hello2</button>
    </>
  );
};

export default CoinByIdData;
