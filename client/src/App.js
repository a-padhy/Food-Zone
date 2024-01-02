import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import SingleRecipePage from "./pages/SingleRecipePage";
import CreateRecipePage from "./pages/CreateRecipe";
import EditRecipePage from "./pages/EditRecipePage";
import ErrorPage from "./pages/ErrorPage";

axios.defaults.baseURL = "https://food-zone-phi.vercel.app/";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recipes/:id" element={<SingleRecipePage />} />
        <Route path="/recipes/edit/:id" element={<EditRecipePage />} />
        <Route path="/new" element={<CreateRecipePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
