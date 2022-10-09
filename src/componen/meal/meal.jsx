import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import "./meal.css";


const Meal = ({meal}) => {
    const [imageUrl,setImageUrl] = useState("");
    useEffect(() => {
        fetch(
          `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=87476720f075460ea5c3f42c2f9556ef&includeNutrition=false`
        )
          .then((response) => response.json())
          .then((data) => {
            setImageUrl(data.image);
          })
          .catch(() => {
            console.log("error");
          });
      }, [meal.id]);
return (
<article>
  <Link to={"/recipe/" + meal.id} >
  <h1>{meal.title}</h1>
        <img src={imageUrl} alt="recipe" />
        <ul>
            <li>preparation time: {meal.readyInMinutes} minutes</li>
            <li>Number of servings: {meal.servings}</li>
         
        </ul>
  </Link>
        
  
   

</article>
)
}

export default Meal;