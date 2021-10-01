import CharacterCard from './CharacterCard';

const CharachterList = (props) => {
  const eachItemList = props.data.map((character) => (
    <li className='card' key={character.id}>
      <CharacterCard character={character} />
    </li>
  ));
  return <ul className='card-list'>{eachItemList}</ul>;
};

export default CharachterList;
