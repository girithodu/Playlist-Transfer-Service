import './IndividualPlaylistComponent.styles.css';
const IndividualPlaylistComponent = ({ item, onSelectedPlaylist, selectedPlaylist }) => {
  const { name, id, images, tracks } = item;
  console.log(images);
  if (item) {
    return (
      <div className="playlist-container" onClick={(e) => onSelectedPlaylist(id)}>
        {images.length > 0 ? (
          <img className={selectedPlaylist == id? "playlist-image-selected":"playlist-image"} src={images[0].url} loading="lazy" />
        ) : (
          <img
            className={selectedPlaylist == id? "playlist-image-selected":"playlist-image"}
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACuCAMAAABdoFxNAAAAHlBMVEUoKChAQEA8PDw3NzcyMjItLS0qKio6OjoxMTE1NTVrJAgTAAAC0ElEQVR4nO2b0ZKDIAxFFUwI///DWxG1KmDr1ggz9zzt1HXmbPaaUMWuAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoXpaYMrkFjTm6ctvoTFuz7QkDnT4Ey/0Ih5yMcbpgXzVz620laoGyo3X0M9Sw+xo1Rs/gr1Nh/WE6+HKzXfh9pZ4d2v1Gd+zIckJ05V5kze7kO9L/VCNeb7UDt/yMeWKswp0fROqcLcbvLx4UkVmZ/mY0st5u7rFWst5vbrk2D+L2CuD8z1gbk+MNcH5vrAXB+Y6wNzfWCuD8z1gbk+MNcH5vrAXJ/PzFnED7I8OGrFnNcHMk7CJ22Ys+83D5JG9ybMKdbbOBN/styEuUyyU0hYwlMlww2YUyzy+sFYeOOrN+fRczicEAp/s9c5RfNRXBJnVG8+htwfP3b1m2c2PfFD5iTD+zgsmFMqKyP+AXNaH/PHTlcwz3YQVjd/8w7/8PGpecHcZQ9p752T2XgZh75obg4dccbqmk/rDz9tT2AJHcKVzHMxL+ToFobg/TYOZSy8LZtndmGoTv8Qla0Ix91ml2rufquXh4/iXZwp13L+/Repi/hkAcO6pNRbMpU1ydl6C5wRpJL5eGUkD1D+Cvg5o0Ryo5YrmPNxoTih2RSzQ0UK5uHPSvy9lF6I3UO2TeRiFKDkwXBxfLPT7j9wPpim1CZsqrouF6I7oHyV8ouTLpbXnn10JwXzcmvmZWUWCYNXcfKXa1662qabFi7si+a4h9dphbw7y3kxtLzZkF5q//eQ7WOcX5zMyHaHt/LLW9nZIZ90OJm/kRiv/tKZ5OJiPlz1MYnk3wG4kz5tKOdheZohmXSq4sbJCanbVWGqVP+6JPWHqlPirmGN0K6nTXf0dZvzRahfxiHHO+FtiM/f3d5pICqRYTvGH+nPF+FhXoY8MA7/zWscErdUbgAAAAAAAAAAAAAAAAAAgB/zB9slDSzsrvRJAAAAAElFTkSuQmCC"
            }
            loading="lazy"
          />
        )}
        <label>{name}</label>
        <label>Total Tracks: {tracks.total}</label>
      </div>
    );
  }

  return null;
};
export default IndividualPlaylistComponent;
