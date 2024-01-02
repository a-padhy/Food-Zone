import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecipes();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-8">Recipes Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
