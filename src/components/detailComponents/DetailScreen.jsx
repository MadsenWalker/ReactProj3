import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
// import DetailImage from "./DetailImage";
import axios from "axios";
import styles from "./DetailScreen.module.css";

const DetailScreen = () => {  

const { id } = useParams();

const [recipe, setRecipe] = useState({});
const url = "https://recipes.devmountain.com";
console.log(recipe);

useEffect(() => {
  axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
    setRecipe(res.data);
  });
}, []);

  return (
    <section>
      Welcome to the details page! This page will be reusable. Follow
      instructions to know what to do here.
      <div className={styles.details_container}>
        <div
          style={{
            background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url('blahblah')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className={styles.ingredients_container}>
          <h2>Recipe</h2>
          <h4>Prep Time:</h4>
          <h4>Cook Time:</h4>
          <h4>Serves:</h4>
          <h2>Ingredients</h2>

          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => {
              return (
                <h4>
                  {ing.quantity} {ing.ingredient}
                </h4>
              );
            })}
        </div>
        <div className={styles.instruction_container}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
