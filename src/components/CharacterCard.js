import '../styles/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={`./character/${props.character.id}`}>
      <img
        className='pictures'
        src={props.character.pict}
        alt={`Picture of ${props.character.name}`}
      />
      <h3 className='character-name'>{props.character.name}</h3>
      <h4 className='character-specie'> {props.character.specie}</h4>
    </Link>
  );
};

export default CharacterCard;
