import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for music!')
  let [data, setData] = useState([])

  return (
    <div className="App">
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
