import React from "react";
import { Route, Routes } from "react-router";
import Header from "./componen/header";
import Home from "./componen/home";
import Joke from "./componen/joke/joke";
import Planner from "./componen/meal/Planner";
import Recipe from "./componen/meal/recipe";



function App() {



  return (
    <>
    <Header/>
    <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/planner" element={<Planner/>} />
        <Route  path="/recipe/:name" element={<Recipe/>} />
        <Route  path="/joke" element={<Joke/>} />
      </Routes>
    </>

    
   
  )
}

export default App