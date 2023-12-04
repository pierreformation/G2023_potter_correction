import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters/house/gryffindor"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };

    fetchtheData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      {data.length === 0 ? (
        <span class="loader"></span>
      ) : (
        data.map((character) => {
          return <div>{<Card character={character} />}</div>;
        })
      )}
    </div>
  );
}

export default App;
