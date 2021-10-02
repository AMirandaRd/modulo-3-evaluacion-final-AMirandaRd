import '../styles/reset.scss';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import callToApi from '../services/api';
import CharachterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [data, setData] = useState([]);
  const [searchByName, setSearchByName] = useState('');

  useEffect(() => {
    callToApi().then((initialData) => {
      setData(initialData);
    });
  }, []);

  const routeData = useRouteMatch('/character/:id');
  const characterId = routeData !== null ? routeData.params.id : '';

  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );

  const handleSearchByName = (ev) => {
    setSearchByName(ev.currentTarget.value);
  };
  const handleForm = (event) => {
    event.preventDefault();
  };

  const filteredData = data.filter((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(searchByName.toLocaleLowerCase())
  );

  return (
    <form onSubmit={handleForm}>
      <Switch>
        <Route path='/character/:id'>
          <CharacterDetail character={selectedCharacter} />
        </Route>
        <Route exact path='/'>
          <h1>Personajes de Rick y Morty</h1>

          <Filters
            searchByName={searchByName}
            handleSearchByName={handleSearchByName}
          />

          <CharachterList data={filteredData} />
        </Route>
      </Switch>
    </form>
  );
};

export default App;
