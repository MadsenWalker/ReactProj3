import React from 'react'
// import { useParams } from "react-router-dom";
// import DetailImage from "./DetailImage";
// import axios from "axios";
import styles from "./DetailScreen.module.css";

const DetailScreen = () => {  
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
        </div>
        <div className={styles.instruction_container}>
          <h2>Instructions</h2>
          <p>
            This is how you cook this recipe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
