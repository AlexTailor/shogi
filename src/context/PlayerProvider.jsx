import React, { useState, createContext } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = (props) => {
  const [player, setPlayer] = useState(1);
  return (
    <PlayerContext.Provider value={[player, setPlayer]}>
      {props.children}
    </PlayerContext.Provider>
  );
};
