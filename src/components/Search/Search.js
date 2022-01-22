import React from 'react';
import styles from './Search.module.scss'

const Search = ({setSearch, setPageNumber}) => {

  return (
    <form className=''>
      <input
        onChange={(event) => {
          setPageNumber(1)
          setSearch(event.target.value)
        }}
        className={styles.input}
        placeholder='Search...'
        type="text"/>
      <button
        onClick={e => {
          e.preventDefault()
        }}
        className={styles.btn}>Search
      </button>
    </form>
  );
};

export default Search;
