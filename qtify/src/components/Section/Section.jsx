import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(endpoint);
        const arr = res.data;
        setAlbums(arr.slice(0,14));
      } catch (err) {
        setError("Failed to fetch albums");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [endpoint]);

  const displayedAlbums = expanded ? albums : albums.slice(0, 7);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!albums.length) return <p className={styles.empty}>No albums available</p>;

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
