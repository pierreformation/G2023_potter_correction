import { useState } from "react";

const Card = (props) => {
  const character = props.character;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="cardandmodal">
      <div
        className="card"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {/* Carte */}
        <img src={character.image} />
        {character.name}
      </div>
      {/* Modale */}
      {showModal ? (
        <div
          onClick={() => {
            setShowModal(false);
          }}
          className="modaleContainer"
        >
          <img src={character.image} />
        </div>
      ) : null}
    </div>
  );
};
export default Card;
