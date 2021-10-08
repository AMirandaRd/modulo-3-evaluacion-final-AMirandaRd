import '../styles/reset.scss';
import '../styles/Images.scss';
import Thankyou from '../images/OMG.gif';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import '../styles/CardDetail.scss';
import callToApi from '../services/api';
import CharachterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import notfound from '../images/rick-and-morty.jpg';

const App = () => {
  const [data, setData] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [searchBySpecie, setSearchBySpecie] = useState('all');
  const [searchByStatus, setSearchByStatus] = useState(false);
  const [searchByGender, setSearchByGender] = useState(false);
  const [searchByLocation, setSearchByLocation] =useState('')

  useEffect(() => {
    callToApi().then((initialData) => {
      const orderedData = initialData.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      setData(orderedData);
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
  const handleLocation=(ev)=>{
    setSearchByLocation(ev.currentTarget.value)
  }

  const handleSearchBySpecie = (ev) => {
    setSearchBySpecie(ev.currentTarget.value);
  };
  const handleSearchByStatus = (ev) => {
    setSearchByStatus(ev.currentTarget.value);
  };

  const handleSearchByGender = (ev) => {
    setSearchByGender(ev.currentTarget.value);
  };
  const handleForm = (event) => {
    event.preventDefault();
  };

  const filteredData = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchByName.toLocaleLowerCase())
    )
    .filter((character)=>
    character.location
    .toLocaleLowerCase()
    .includes(searchByLocation.toLocaleLowerCase())
    )

    .filter(
      (character) =>
        searchBySpecie === 'all' || searchBySpecie === character.specie
    )
    .filter((character) => {
      if (searchByStatus === '' || searchByStatus === false) {
        return true;
      } else if (searchByStatus === character.status) {
        return character;
      }
    })
    .filter((character) => {
      if (searchByGender === '' || searchByGender === false) {
        return true;
      } else if (searchByGender === character.gender) {
        return character;
      }
    });

  return (
    <form onSubmit={handleForm}>
      <Switch>
        <Route path='/character/:id'>
          <CharacterDetail character={selectedCharacter} />
        </Route>
        <Route path='/pepino'>
          <section>
            <h3> Tu has leido mi ReadMe!!</h3>
            <h2>GRACIAS!!</h2>
            <img src={Thankyou} alt='Thank you gif' />
            <Link to='/'>
              {' '}
              <button className='return'>volver</button>
            </Link>
          </section>
        </Route>
        <Route exact path='/'>
          <Header />

          <Filters
            searchByName={searchByName}
            handleSearchByName={handleSearchByName}
            searchBySpecie={searchBySpecie}
            handleSearchBySpecie={handleSearchBySpecie}
            searchByStatus={searchByStatus}
            handleSearchByStatus={handleSearchByStatus}
            searchByGender={searchByGender}
            handleSearchByGender={handleSearchByGender}
          />
 <input type="text" onChange={handleLocation} value={searchByLocation}/>
          <CharachterList data={filteredData} />
        </Route>
        <Route>
          <section>
            <h3> Ese personaje no existe!</h3>
            <img className='all-images' src={notfound} alt='Character Missed' />
            <Link to='/'>
              {' '}
              <button className='return'>volver</button>
            </Link>
          </section>
        </Route>
      </Switch>
    </form>
  );
};

export default App;
