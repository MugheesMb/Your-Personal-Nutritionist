import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import "./recipe.css";

const Recipe = () => {

        let params = useParams();
            const [details,setdetails] = useState({});

                const fetchdetails = async () => {
                    const data  = await fetch(
                        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=87476720f075460ea5c3f42c2f9556ef`
                    );
                    const detailData = await data.json();
                    setdetails(detailData);
                };
         useEffect(() => {
            fetchdetails();

         }, [params.name]
         );

   return (
    <>
   
            <div className="first" > {details.title}</div>
            <img className="lop"  src={details.image} alt="" />
            <h1>INSTRUCTIONS</h1>
            <h3 className="inst"  dangerouslySetInnerHTML={{__html: details.instructions}} ></h3>
            <ul>
                {/* {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id} > { ingredient.original } </li>
                ))} */}
            </ul>

            </>
   );
  
}

export default Recipe;