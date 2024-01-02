import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-8">Recipes Collection</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or ingredients"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {filteredRecipes.map((recipe) => (
          <Link
            key={recipe._id}
            to={`/recipes/${recipe._id}`}
            className="recipe-card"
          >
            <div>
              <h2 className="text-lg font-semibold">{recipe.name}</h2>
            </div>
            <img
              src={recipe.imageUrl}
              alt={recipe.name}
              className="w-full h-32 object-cover"
            />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
