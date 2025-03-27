import React from "react";
import styles from "./SearchResults.module.css";

function SearchResults({ searchResults }) {
  return (
    <div className={styles.searchResultsContainer}>
      <h2 className={styles.searchResultsTitle}>Search Results</h2>
      <ul className={styles.searchResultsList}>
        {searchResults.map((song) => (
          <li key={song.id} className={styles.searchResultsItem}>
            <div className={styles.songInfo}>
              <span className={styles.songTitle}>{song.title}</span>
              <span className={styles.songArtist}>{song.artist}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
