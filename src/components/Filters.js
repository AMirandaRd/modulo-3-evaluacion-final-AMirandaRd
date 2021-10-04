import '../styles/Filters.scss'

const Filters = (props) => {
  return (
    <section className='filters'>
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

      <fieldset action="" className='StatusSearcher'>
        <p>Buscar solo personajes que...</p>
        <label htmlFor="status">
         Hayan fallecido
         <input type="radio"
         name='status'
         value="Dead"
         onChange={props.handleSearchByStatus}
         checked={props.searchByStatus==='Dead'}/>
        
         </label>
         <label htmlFor="status">
           Sigan vivos
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
      </fieldset>

       <fieldset action="" className='GenderSearcher'>
         <p> Filtrar por sexo:</p>
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
         </fieldset>
       
    </section>
     );
};

export default Filters;
