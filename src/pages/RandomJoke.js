// src/pages/RandomJoke.js
import React, { useEffect, useState } from "react";

function RandomJoke() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [joke, setJoke] = useState("Click a button");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://api.chucknorris.io/jokes/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories.");
      }
    }
    fetchCategories();
  }, []);

  async function fetchJoke() {
    const url = selectedCategory
      ? `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
      : "https://api.chucknorris.io/jokes/random";

    try {
      const res = await fetch(url);
      const data = await res.json();
      const category = data.categories[0] || "random";
      setJoke(
        <>
          <div><strong>Category:</strong> {category}</div>
          <div>{data.value}</div>
        </>
      );
    } catch {
      setJoke("Something went wrong.");
    }
  }

  return (
    <>
       <div className="container">
      <h1>Chuck Norris Joke Generator</h1>
      <label htmlFor="categorySelect"><b>Choose a category:</b></label>
      <select
        id="categorySelect"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">random</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={fetchJoke}>Joke</button>

      <div id="joke" className="joke-box">{joke}</div>
      </div>
    </>
  );
}

export default RandomJoke;
