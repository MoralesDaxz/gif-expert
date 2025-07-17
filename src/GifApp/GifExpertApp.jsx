import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Zoro","Ghibli"]);

  const onAddCategory = (newCategory) => {

    const switchToString = String(newCategory).trim().toLowerCase()
    const compareNewCategory = categories.includes(switchToString);
    console.log(compareNewCategory);
    if (compareNewCategory) {
      return alert("Ya has realizado esta busqueda antes.")
    };
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
