import React, {useState} from 'react'
import MealList from './MeaList';

import './planner.css';


const Planner = () => {
    
  const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000)

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=87476720f075460ea5c3f42c2f9556ef&timeFrame=day&targetCalories=${calories}`
      //`https://api.spoonacular.com/food/jokes/random?apiKey=26c3fc514cee44dc9c6792af65600799&includeNutrition=false`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
        console.log(data);
      })
      .catch(() => {
        console.log("error")
      })
  }

  function handleChange(e) {
    setCalories(e.target.value)
  }

    return (
      <div className='plan' >
      
      <section className="controls">
        <input
        className='inp'
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button className='but' onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
    )
}

export default Planner;