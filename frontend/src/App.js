import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  likes;
  function increaslikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Navbar />
      <button
        onClick={increaslikes}
        className="px-4 py-2 my-2 mx-2 border bg-yellow-500"
      >
        Like {likes}
      </button>
      <h2>{likes}</h2>
    </div>
  );
}

export default App;
