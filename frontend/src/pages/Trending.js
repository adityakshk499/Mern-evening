import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import DummyUi from "../components/DummyUi";
function Trending() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (data.length === 0) {
    return <DummyUi />;
  } else {
    return (
      <div>
        <Cards apiData={data} />
      </div>
    );
  }
}

export default Trending;
