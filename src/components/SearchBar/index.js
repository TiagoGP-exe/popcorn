import './style.css';
import React from 'react'

function SearchBar({ value, handleChange, onSubmit, ...props }) {
  return (
    <form className="searchBar" onSubmit={onSubmit} >
      <input type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search"
        {...props}
      />
    </form>
  )
}

export default SearchBar;
