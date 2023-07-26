const IndividualPlaylistComponent = ({ item }) => {
  const { name, id, images, tracks } = item;
  if (item) {
    return (
      <div>
        <img src={images[0]} />
        <label>{name}</label>
        <label>{tracks.total}</label>
      </div>
    );
  }
  return null;
};
export default IndividualPlaylistComponent;
