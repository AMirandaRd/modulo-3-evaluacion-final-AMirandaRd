import { Link } from 'react-router-dom';
import sorrylogo from '../images/losiento.jpg';
import '../styles/CardDetail.scss'
const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return (
      <section>
        <p>El personaje no existe</p>
        <img src={sorrylogo} alt='failed attempt' />
      </section>
    );
  } else {
    return (
      <>
        <img
          className='picture-detail'
          src={props.character.pict}
          alt={`Picture of ${props.character.name}`}
        />
        <ul className='detailed-list'>
          <li>{props.character.name}</li>
          <li> {props.character.specie}</li>
          <li>Natural de:{props.character.origin}</li>
          <li> Estado:{props.character.status}</li>
          <li>Sexo:{props.character.gender}</li>
          <li>Número de apariciones:{props.character.episodes}</li>
        </ul>
        <Link to='/'>
          {' '}
          <button className='return'>volver</button>
        </Link>
      </>
    );
  }
};
export default CharacterDetail;
