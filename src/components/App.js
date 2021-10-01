import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import callToApi from '../services/api';
import CharachterList from './CharacterList';

const App = () => {
  const [data, setData]=useState([]);

  useEffect(()=>{
    callToApi().then((initialData)=> {
      console.log(initialData);
      setData(initialData)
    })
  }
  
  ,[]) 
  return (
    <form>
  <h1>Personajes de Rick y Morty</h1>

  <input type="text" 
  name='name'
  value='control'
  />

  <CharachterList data={data}/>
    
      
    </form>
  );
};

export default App;
   
 
