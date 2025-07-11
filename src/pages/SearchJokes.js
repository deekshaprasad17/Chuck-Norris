// src/pages/SearchJoke.js
import React, { useState } from "react";

function SearchJoke() {
  const [query, setQuery] = useState("");
  const [joke, setJoke] = useState("Search for a joke");

  async function searchJokes() {
    if (!query.trim()) {
      setJoke("Please enter something to search!");
      return;
    }

    try {
      const res = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();

      if (data.total === 0) {
        setJoke("No jokes found for that query.");
      } else {
        const joke = data.result[0];
        //const category = joke.categories[0] || "random";
        setJoke(
          <>
            <div><strong>Search Term:</strong> "{query}"</div>
            {/*<div><strong>Category:</strong> {category}</div>*/}
            <div>{joke.value}</div>
          </>
        );
      }
    } catch {
      setJoke("Search failed. Try again.");
    }
  }

  return (
    <>
      <div className="container">
      <h1>Chuck Norris Jokes</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search jokes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button id="btn" onClick={searchJokes}>Search</button>
      </div>
      <div id="joke" className="joke-box">{joke}</div>
      </div>
    </>
  );
}

export default SearchJoke;
