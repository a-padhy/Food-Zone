import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
const CreateRecipe = () => {
  const userID = window.localStorage.getItem("userID");
  const { id } = useParams();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

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

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };
  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };
  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `recipes/edit/${recipe._id}`,
        { ...recipe },
        {
          headers: { authorization: cookies.access_token },
        }
      );
      alert("Recipe Saved");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="create-recipe container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Create Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 mt-1"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-600"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 mt-1"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-semibold text-gray-600"
          >
            Ingredients:
          </label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(event) => handleIngredientChange(event, index)}
              className="border rounded w-full py-2 px-3 mt-1"
            />
          ))}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-2"
          >
            Add Ingredient
          </button>
        </div>

        <div>
          <label
            htmlFor="instructions"
            className="block text-sm font-semibold text-gray-600"
          >
            Instructions:
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 mt-1"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-semibold text-gray-600"
          >
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 mt-1"
          />
        </div>

        <div>
          <label
            htmlFor="cookingTime"
            className="block text-sm font-semibold text-gray-600"
          >
            Cooking Time (minutes):
          </label>
          <input
            type="number"
            id="cookingTime"
            name="cookingTime"
            value={recipe.cookingTime}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
