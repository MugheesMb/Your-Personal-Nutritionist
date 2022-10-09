import React, {useState} from 'react'
import JokeBox from './jokebox';




const Joke = () => {
    const [mealData, setMealData] = useState(null);
    function getMealData() {
        fetch(
       
          `https://api.spoonacular.com/food/jokes/random?apiKey=87476720f075460ea5c3f42c2f9556ef&includeNutrition=false`
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
    
     
    
        return (
          <div className='plan' >
          
          <section className="controls">
          
            <button className='but' onClick={getMealData}>tell me a joke</button>
          </section>
           {mealData && <JokeBox mealData={mealData} />} 
        </div>
        )
    }

export default Joke;