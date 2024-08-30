import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ setResult, setWord }) {
  const fetchData = (value) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
      .then((response) => response.json())
      .then((json) => {
        if (json && json.length > 0) {
          let i = 0;
          const results = [];

          while (json[0].meanings[0].definitions[i]) {
            results.push(" " + json[0].meanings[0].definitions[i].definition);
            i++;
          }
          setWord(json[0].word);
          setResult(results);
        } else {
          console.error("No results found for the provided word.");
          setResult(["No definitions found."]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResult(["Error fetching data."]);
      });
  };

  const handleChange = (value) => {
    setText(value);
    if (value) {
      fetchData(value);
    } else {
      setResult([]);
    }
  };

  const [text, setText] = useState("");

  return (
    <div className="input-wrapper">
      <FaSearch id="searchicon" />
      <input
        placeholder="Start typing here..."
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
