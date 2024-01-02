// RecipeCard.js
import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  console.log(recipe.image);
  return (
    <Link
      className="bg-white rounded-md overflow-hidden shadow-md"
      to={`recipe/${recipe.id}`}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
      </div>
    </Link>
  );
};

export default RecipeCard;
