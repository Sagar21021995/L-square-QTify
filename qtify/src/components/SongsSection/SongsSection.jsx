import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import styles from "./SongsSection.module.css";

export default function SongsSection({ songs, genres }) {
  const [selectedGenre, setSelectedGenre] = useState("All");
  console.log("SongsSection genres:", genres);
  console.log(songs);

  // Filter songs by genre
  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.label === selectedGenre);

  return (
    <div className={styles.section}>
      <h2>Songs</h2>

      {/* Genre Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
    "& .MuiTab-root": {
      color: "white",          
      fontWeight: 500,
      textTransform: "none",
    },
    "& .Mui-selected": {
      color: "var(--color-white) !important",  
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "var(--color-primary)",   
      height: "3px",
      borderRadius: "2px",
    },
  }}
        className={styles.tabs}
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} className={styles.customTab} />
        ))}
      </Tabs>

      {/* Carousel */}
      {Array.isArray(filteredSongs) && filteredSongs.length > 0 ? (
        <Carousel albums={filteredSongs} isSongsSection={true} />
      ) : (
        <p className={styles.empty}>No songs available</p>
      )}
    </div>
  );
}
