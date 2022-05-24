import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Teams from "../Pages/Teams/Teams";
import AddTeams from "../Pages/Teams/AddTeams";
import Register from "../Pages/User/Register";
import Login from "../Pages/User/Login";
import Admin from "../Pages/User/Admin";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/teams" element={<Teams />} />
      <Route exact path="/addteam" element={<AddTeams />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Router;
