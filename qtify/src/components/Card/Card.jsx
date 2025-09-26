import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ image, albumName, follows }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`Album cover of ${albumName}`} className={styles.albumImage} />
      <div className={styles.cardContent}>
        <p className={styles.albumName}>{albumName}</p>
        {follows !== undefined && (
          <Chip 
            label={`${follows} Follows`} 
            size="small" 
            sx={{ backgroundColor: 'var(--color-primary)', color: 'black', fontSize: '0.75rem' }}
          />
        )}
      </div>
    </div>
  );
}

export default Card;

