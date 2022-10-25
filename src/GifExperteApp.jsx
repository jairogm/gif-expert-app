import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

//API_KEY: ZH0hbDZ9TqF3oO4gR0kX84PnWAvDwzSt
export const GifExperteApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertAPP</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
