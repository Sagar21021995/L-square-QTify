import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ image, albumName, follows }) {
  return (
    <div className={styles.card}>
      {/* Album Image */}
      <img src={image} alt={albumName} className={styles.albumImage} />

      {/* Bottom Section */}
      <div className={styles.cardContent}>
        <p className={styles.albumName}>{albumName}</p>

        {/* Chip showing follows */}
        <Chip 
          label={`${follows} Follows`} 
          className={styles.chip} 
          size="small"
        />
      </div>
    </div>
  );
}

export default Card;
