import React from "react";
import "./SearchResultList.css";

const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, index) => (
        <div key={index}>
          {result}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
