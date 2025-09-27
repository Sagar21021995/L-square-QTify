import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ image, albumName, follows }) {
  return (
    <div  className={styles.wrapper}>
    <div className={styles.card}>
      <img src={image} alt={`Album cover of ${albumName}`} className={styles.albumImage} />
      <div className={styles.cardContent}>
        <div>
        {follows !== undefined && (
          <Chip 
            label={`${follows} Follows`} 
            size="small" 
            sx={{ backgroundColor: 'var(--color-black)', color: 'white', fontSize: '0.5rem' }}
          />
        )}
        </div>
      </div>
      
    </div>
    
    <p className={styles.albumName}>{albumName}</p>
    
    </div>
  );
}

export default Card;

