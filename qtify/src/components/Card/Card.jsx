import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ image, albumName, follows, likes, isSongsSection }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Album/Song Image */}
        <img
          src={image}
          alt={`Cover of ${albumName}`}
          className={styles.albumImage}
        />

        {/* Chip for Follows or Likes */}
        <div className={styles.cardContent}>
          {typeof follows !== "undefined" || typeof likes !== "undefined" ? (
            <Chip
              label={isSongsSection ? `${likes} Likes` : `${follows} Follows`}
              size="small"
              sx={{
                backgroundColor: "var(--color-black)",
                color: "white",
                fontSize: "0.6rem",
              }}
            />
          ) : null}
        </div>
      </div>

      {/* Album/Song Title */}
      <p className={styles.albumName}>{albumName}</p>
    </div>
  );
}

export default Card;
