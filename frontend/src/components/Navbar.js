import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border shadow-xl w-full">
      <nav className="flex py-3 justify-between  mx-auto items-center container">
        <Link to={"/"}>
          {" "}
          <h1 className="cursor-pointer text-[30px] font-extrabold">
            myCrypto<span className="text-blue-700">Tracker</span>
          </h1>
        </Link>
        <navItem className=" flex gap-4 font-semibold text-[20px]">
          <Link to={"/top10"}>
            {" "}
            <p className="cursor-pointer  hover:text-blue-600">Top10</p>
          </Link>
          <Link to={"/trending"}>
            {" "}
            <p className="cursor-pointer  hover:text-blue-600">Trending</p>
          </Link>
          <Link to={"/watchlist"}>
            {" "}
            <p className="cursor-pointer hover:text-blue-600">watchlist</p>
          </Link>
        </navItem>

        <div className="flex gap-4">
          <Link to={"/login"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
              Login
            </button>
          </Link>
          <Link to={"/signin"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
              Signin
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
