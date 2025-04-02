import React, { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Library from "../Library/Library";
import styles from "./App.module.css";
import songsData from "../../data/songs.json";
import {
  MusicCollectionContext,
  MusicCollectionData,
} from "../../Context/MusicCollection";

function App() {
  const { addToMusicCollection, musicCollection, removeFromMusicCollection } =
    useContext(MusicCollectionContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Process the data in the useEffect hook
    const processedData = songsData.map((item) => ({
      ...item,
      id: crypto.randomUUID(),
    }));
    setData(processedData);
  }, []);

  useEffect(() => {
    // Add initial songs to the musicCollection Context. Only add to context on initial load.
    const initialLoad = data.length > 0 && musicCollection.length === 0;
    if (initialLoad) {
      data.forEach((song) => {
        addToMusicCollection(song);
      });
    }
  }, [addToMusicCollection, data, musicCollection]);

  return (
    <MusicCollectionData>
      <div className={styles.app}>
        <Header />
        <Search data={data} setData={setData} />
        <Library data={data} setData={setData} />
      </div>
    </MusicCollectionData>
  );
}

export default App;
