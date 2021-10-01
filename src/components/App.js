import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import callToApi from '../services/api';
import CharachterList from './CharacterList';
import Filters from './Filters';


const App = () => {
  const [data, setData]=useState([]);
  const [searchByName, setSearchByName]= useState('');

  useEffect(()=>{
    callToApi().then((initialData)=> {
      
      setData(initialData)
    })
  },[])
  
  const handleSearchByName=(ev)=>{
    setSearchByName(ev.currentTarget.value)
    
  }
  const handleForm=(event)=>{
    event.preventDefault()
  }

  const filteredData = data.filter((character) =>
      character.name.toLocaleLowerCase().includes(searchByName.toLocaleLowerCase())
    )
  
  return (
    <form onSubmit={handleForm}>
  <h1>Personajes de Rick y Morty</h1>

<Filters searchByName={searchByName} 
handleSearchByName={handleSearchByName}
/>

  <CharachterList data={filteredData}/>
    
      
    </form>
  );
};

export default App;
   
 
