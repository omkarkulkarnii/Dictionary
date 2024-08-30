import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [word, setWord] = useState();

  return (
    <div className="App">
      <div className="barcomp">
        <SearchBar setResult={setResult} setWord={setWord} />
        <h5 className="word">{word}</h5>

        <SearchResultList results={result} />
      </div>
    </div>
  );
}

export default App;
