import React, { useState, useEffect} from 'react';
import './App.css' 
import Character from './components/Character'
import axios from 'axios';
import {handlers} from './mocks/handlers'

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentCharacterId, setCurrentCharacterId] = useState(null)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const openDetails = (id) => {
    setCurrentCharacterId(id);
  };

  const closeDetails = () => {
    setCurrentCharacterId(null);
  }

useEffect(() => {
  axios.get(`${handlers}`)
    .then(res => {
      console.log(res);
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(err);
    })
}, [])

const AddCharacter = (props) => (
  <div className='character'>
    {props.info.name}
    <button onClick={() => openDetails(props.info.id)}>See details</button>
  </div>
);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
      characters.map((ch) => {
        return <AddCharacter key={ch.id} info={ch} />
      })
    }
    {currentCharacterId && (
      <Character characterId={currentCharacterId} close={closeDetails}/>
    )} 
    </div>
  );
}

export default App;
