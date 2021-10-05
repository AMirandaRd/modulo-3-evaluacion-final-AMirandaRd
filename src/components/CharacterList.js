import '../styles/CharacterList.scss';
import '../styles/Images.scss'
import sorry from '../images/losiento.jpg'
import CharacterCard from './CharacterCard';

const CharachterList = (props) => {
  console.log(props.data)
  if (props.data.length === 0){
    return(
      <section>
        <h3>Ese personaje no se ha encontrado...</h3>
        <img className='all-images' src={sorry} alt="Search again" />
      </section>
    )
  } else{
  
  const eachItemList = props.data.map((character) => (
    
    <li className='card' key={character.id} id={character.id}>
      <CharacterCard character={character} />
    </li>
  ));
  return <ul className='card-list'>{eachItemList}</ul>;
};}

export default CharachterList;
