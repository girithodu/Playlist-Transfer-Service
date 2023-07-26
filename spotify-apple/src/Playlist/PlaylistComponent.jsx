import { useState, useEffect } from "react";
import IndividualPlaylistComponent from "./IndividualPlaylistComponent.jsx";
import './PlaylistComponent.styles.css';
const PlaylistComponent = ({ playlistData, onNextHandler }) => {
  const {items} = playlistData;
  const [selectedPlaylist, setSelectedPlaylist] = useState(items[0].id)
  const onSelectedPlaylist = (id) => {
    setSelectedPlaylist(id);
  }
  if (playlistData) {
    return (
      <>
        <div className = "playlists-container">
          {playlistData.items.map((item) => {
            return <IndividualPlaylistComponent item={item} key={item.id} onSelectedPlaylist={onSelectedPlaylist} selectedPlaylist={selectedPlaylist} />;
          })}
        </div>
        {playlistData.previous ? (
          <button onClick={(e) => onNextHandler("previous")}>Previous</button>
        ) : null}
        <button onClick={(e) => onNextHandler("next")}>Next</button>
        <button>Transfer to apple music</button>
      </>
    );
  }
  return null;
};
export default PlaylistComponent;
