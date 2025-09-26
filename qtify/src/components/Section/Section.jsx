import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(endpoint);
        setAlbums(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, [endpoint]);

  const displayedAlbums = expanded ? albums : albums.slice(0, 6);

  return (
    <div className={styles.section}>
      {/* Header with title + Collapse button */}
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          className={styles.collapseBtn}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Collapse" : "Show All"}
        </button>
      </div>

      {/* Grid of cards */}
      <div className={styles.grid}>
        {displayedAlbums.map((album) => (
          <Card key={album.id}
            image={album.image}
            albumName={album.title}
            follows={album.follows} />
        ))}
      </div>
    </div>
  );
}

export default Section;

