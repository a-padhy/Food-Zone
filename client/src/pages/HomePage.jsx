import React from "react";
import { recipes } from "../data.js";
import Card from "../components/Card.jsx";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-8">Recipes Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
