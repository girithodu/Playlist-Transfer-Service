import { useState, useEffect } from "react";
import IndividualPlaylistComponent from "./IndividualPlaylistComponent.jsx";
const PlaylistComponent = ({ playlistData, onNextHandler }) => {
  if (playlistData) {
    return (
      <>
        {playlistData.items.map((item) => {
          return <IndividualPlaylistComponent item={item} key={item.id} />;
        })}
        {playlistData.previous ? (
          <button onClick={(e) => onNextHandler("previous")}>Previous</button>
        ) : null}
        <button onClick={(e) => onNextHandler("next")}>Next</button>
      </>
    );
  }
  return null;
};
export default PlaylistComponent;
