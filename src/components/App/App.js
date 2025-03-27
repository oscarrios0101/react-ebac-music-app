import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchResults from "../SearchResults/SearchResults";
import Library from "../Library/Library";
import styles from "./App.module.css";
import songsData from "../../data/songs.json"; // Import the JSON data

function App() {
  const [searchResults, setSearchResults] = useState(() => {
    // Generate IDs for each song from the imported data
    return songsData.map((song) => ({
      ...song,
      id: crypto.randomUUID(), // Generate a unique ID
    }));
  });

  return (
    <div className={styles.app}>
      <Header />
      <SearchResults searchResults={searchResults} />
      <Library />
    </div>
  );
}

export default App;
