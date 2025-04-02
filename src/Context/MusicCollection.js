import React, { createContext, useState } from "react";

export const MusicCollectionContext = createContext();

export const MusicCollectionData = ({ children }) => {
  const [musicCollection, setMusicCollection] = useState([]);

  const addToMusicCollection = (song) => {
    setMusicCollection([...musicCollection, song]);
  };

  const removeFromMusicCollection = (song) => {
    setMusicCollection(musicCollection.filter((s) => s.id !== song.id));
  };

  return (
    <MusicCollectionContext.Provider
      value={{
        musicCollection,
        addToMusicCollection,
        removeFromMusicCollection,
      }}
    >
      {children}
    </MusicCollectionContext.Provider>
  );
};
