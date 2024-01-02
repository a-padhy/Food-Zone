import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleRecipePage = () => {
  const { id } = useParams();
  const userID = window.localStorage.getItem("userID");
  const [recipe, setRecipe] = useState("");
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);
  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">{recipe.name}</h1>
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="mb-4 rounded-md shadow-md"
        />
        <div>{recipe.description}</div>
        <div className="mb-6 mt-2">
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc pl-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
          <ol className="list-decimal pl-4">{recipe.instructions}</ol>
        </div>
        {recipe.userOwner === userID && (
          <Link
            to={`/recipes/edit/${id}`}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4 inline-block"
          >
            Edit Recipe
          </Link>
        )}
      </div>
    </div>
  );
};

export default SingleRecipePage;
