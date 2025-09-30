import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection";
import "./App.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Top Albums
        const topRes = await fetch("https://qtify-backend.labs.crio.do/albums/top");
        const topData = await topRes.json();

        // Fetch New Albums
        const newRes = await fetch("https://qtify-backend.labs.crio.do/albums/new");
        const newData = await newRes.json();

        // Fetch Songs
        const songsRes = await fetch("https://qtify-backend.labs.crio.do/songs");
        const songsData = await songsRes.json();

        // Fetch Genres
        const genresRes = await fetch("https://qtify-backend.labs.crio.do/genres");
        const genresData = await genresRes.json();

        setTopAlbums(topData);
        setNewAlbums(newData);
        setSongs(songsData);
        setGenres(["All", ...(Array.isArray(genresData.data) ? genresData.data.map(g => g.label) : [])]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="sections">
        <div><Section title="Top Albums" albums={topAlbums} /></div>
        <div><Section title="New Albums" albums={newAlbums} /></div>
        <div><SongsSection songs={songs} genres={genres} /></div>

        
        
      </div>
    </div>
  );
}

export default App;
