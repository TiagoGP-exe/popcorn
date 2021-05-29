import React, { useState } from 'react';

import MovieList from '../MovieList';
import Nav from '../Nav'
import SearchBar from '../SearchBar'

import './style.css'

function App() {
  const [input, setInput] = useState('')

  const handleSubmit = async () => {
    const search = await fetch(`http://www.omdbapi.com/?apikey=7d7167af&s=${input}`)
    const dataUser = await search.json();
    console.log(dataUser)
  }

  const handleChange = (event) => {
    const { value } = event.target
    setInput(value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  }

  return (
    <div>
      <Nav />
      <SearchBar handleChange={handleChange} value={input} onSubmit={onSubmit} />
      <MovieList />
    </div>
  )

}

export default App;
