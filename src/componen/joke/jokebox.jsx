import React from "react";



const JokeBox = ({mealData}) => {
  const nutrients = mealData;

  return (
    <main>
      <section className="nutrients">
        <h1>  {nutrients.text} </h1>
      
      </section>
         
        </main>
      );
        }
export default JokeBox;