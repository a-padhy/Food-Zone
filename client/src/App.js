import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
// import SingleRecipePage from "./pages/SingleRecipePage";
import CreateRecipePage from "./pages/CreateRecipe";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/recipe/:id" element={<SingleRecipePage />} /> */}
        <Route path="/new" element={<CreateRecipePage />} />
      </Routes>
    </Router>
  );
};

export default App;
