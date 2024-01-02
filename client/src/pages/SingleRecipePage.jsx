import React from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../data.js";

const SingleRecipePage = () => {
  const { id } = useParams();
  console.log(id);
  const recipe = recipes.find((r) => r.id === parseInt(id, 10));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="mb-4 rounded-md shadow-md"
        />

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc pl-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
          <ol className="list-decimal pl-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipePage;
