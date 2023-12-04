const Card = (props) => {
  const character = props.character;
  return (
    <div className="card">
      <img src={character.image} />
      {character.name}
    </div>
  );
};
export default Card;
