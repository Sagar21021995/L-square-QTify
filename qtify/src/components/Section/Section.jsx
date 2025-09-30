import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

function Section({ title, albums }) {
  const [expanded, setExpanded] = useState(false);

  if (!albums || albums.length === 0) {
    return <p className={styles.empty}>No albums available</p>;
  }

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          className={styles.collapseBtn}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? "Collapse" : "Show All"}
        </button>
      </div>

      {!expanded ? (
        <Carousel albums={albums} />
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              albumName={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
