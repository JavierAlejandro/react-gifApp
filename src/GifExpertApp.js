import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {
  //const categories = ["Rick and Morty", "The Simpsons", "My Little Pony"];

  const [categories, setCategories] = useState(["Algo divertido..."]);

  return (
    <>
      <h2>Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GiftGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};
