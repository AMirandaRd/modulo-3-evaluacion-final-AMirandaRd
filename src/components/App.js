import '../styles/reset.scss';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch} from 'react-router-dom';
import sorry from '../images/losiento.jpg'
import callToApi from '../services/api';
import CharachterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

const App = () => {
  const [data, setData] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [searchBySpecie, setSearchBySpecie]= useState('all');
  const [searchByStatus, setSearchByStatus]= useState('');
  const [searchByGender, setSearchByGender]=useState('')

 useEffect(() => {
    callToApi().then((initialData) => {
     const orderedData= initialData.sort((a, b) => (a.name > b.name ? 1 : a.name< b.name? -1 : 0)) 
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

  const handleSearchBySpecie=(ev)=>{
    setSearchBySpecie(ev.currentTarget.value)
  }
  const handleSearchByStatus =(ev)=>{
    setSearchByStatus(ev.currentTarget.value)
  }
  
  const handleSearchByGender=(ev)=>{
    setSearchByGender(ev.currentTarget.value)
  }
  const handleForm = (event) => {
    event.preventDefault();
  };

  const filteredData = data
  .filter((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(searchByName.toLocaleLowerCase()))    
  
  .filter((character) => searchBySpecie === 'all' || searchBySpecie === character.specie
      )
  .filter((character) =>{ if(searchByStatus === ''){
    return true
  }else if( searchByStatus === character.status){
    return character
  }
})
  .filter((character)=>{if(searchByGender===''){
    return true
  }else if (searchByGender=== character.gender){
    return character
  }
}
  )
 
 
  
  return (
    <form onSubmit={handleForm}>
      <Switch>
        <Route path='/character/:id'>
          <CharacterDetail character={selectedCharacter} />
        </Route>
        <Route exact path='/'>
          <Header/>

          <Filters
            searchByName={searchByName}
            handleSearchByName={handleSearchByName}
            searchBySpecie={searchBySpecie}
            handleSearchBySpecie={handleSearchBySpecie}
            searchByStatus={searchByStatus}
            handleSearchbyStatus={handleSearchByStatus}
            searchByGender={searchByGender}
            handleSearchByGender={handleSearchByGender} 
          />
           

          <CharachterList data={filteredData} />
        </Route>
        <Route>
          <section>
            <p> Ese personaje no existe!</p>
            <img src={sorry} alt="Search again" />

          </section>
        </Route>
      </Switch>
    </form>
  );
};

export default App;
