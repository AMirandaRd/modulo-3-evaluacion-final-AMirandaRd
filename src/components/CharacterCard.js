const CharacterCard = (props) => {
  return (
    <>
      <img
        src={props.character.pict}
        alt={`Picture of ${props.character.name}`}
      />
      <h3>{props.character.name}</h3>
      <p> {props.character.species}</p>
    </>
  );
};

export default CharacterCard;
