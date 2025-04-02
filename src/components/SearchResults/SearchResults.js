import React from "react";
import styles from "./SearchResults.module.css";
import Song from "../Song/Song";

function SearchResults({ searchResults }) {
  return (
    <div className={styles.searchResultsContainer}>
      <h2 className={styles.searchResultsTitle}>Search Results</h2>
      <ul className={styles.searchResultsList}>
        {searchResults.map((song) => (
          <li key={song.id} className={styles.searchResultsItem}>
            <div className={styles.songInfo}>
              <Song song={song} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
