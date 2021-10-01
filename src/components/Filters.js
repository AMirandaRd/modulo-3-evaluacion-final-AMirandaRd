const Filters = (props) => {
  return (
    <input
      className='search-name'
      type='text'
      name='name'
      value={props.searchByName}
      onChange={props.handleSearchByName}
    />
  );
};

export default Filters;
