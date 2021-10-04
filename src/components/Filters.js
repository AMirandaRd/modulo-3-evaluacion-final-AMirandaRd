const Filters = (props) => {
  return (
    <>
      <input
      placeholder='Busca tu personaje favorito'
        className='search-name'
        type='text'
        name='name'
        value={props.searchByName}
        onChange={props.handleSearchByName}
      />
      <select name="specie" id="specie" value={props.searchBySpecie} onChange={props.handleSearchBySpecie}>
      <option value="all">Todos</option>
      <option value="Human">Humano</option>
      <option value="Alien">Alien</option>
      </select>

      <label htmlFor="status"> 
       Ha fallecido
       <input type="radio"
       name='status'
       value="Dead"
       onChange={props.handleSearchByStatus}
       checked={props.searchByStatus==='Dead'}/>
      
       </label>
       <label htmlFor="status">
         Sigue vivo
         <input type="radio"
         name='status'
         value='Alive'
         onChange={props.handleSearchByStatus}
         checked={props.searchByStatus==='Alive'}
         />
        
       </label>
       <label htmlFor="status"> 
       Desconocido
       <input type="radio"
       name='status'
       value="unknown"
       onChange={props.handleSearchByStatus}
       checked={props.searchByStatus==='unknown'}/>
       </label>

       <label htmlFor="gender"> 
       Mujer
       <input type="radio"
       name='gender'
       value="Female"
       onChange={props.handleSearchByGender}
       checked={props.searchByGender==='Female'}/>
      
       </label>
       <label htmlFor="gender">
         Hombre
         <input type="radio"
         name='gender'
         value='Male'
         onChange={props.handleSearchByGender}
         checked={props.searchByGender==='Male'}
         />
        
       </label>
       <label htmlFor="status"> 
       Desconocido
       <input type="radio"
       name='status'
       value="unknown"
       onChange={props.handleSearchByGender}
       checked={props.searchByGender==='unknown'}/>
       </label>
    </>
     );
};

export default Filters;
