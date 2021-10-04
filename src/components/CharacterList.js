import '../styles/CharacterList.scss';
import notfound from '../images/rick-and-morty.jpg'
import CharacterCard from './CharacterCard';

const CharachterList = (props) => {
  console.log(props.data)
  if (props.data.length === 0){
    return(
      <section>
        <p>Ese nombre no se ha encontrado...</p>
        <img src={notfound} alt="Character Missed" />
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
