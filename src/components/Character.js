// Write your Character component here

import React, { useState, useEffect} from 'react' 
import {handlers} from '../mocks/handlers'
import axios from 'axios'
import App from '../App.js'

 function Character(props) {
    const { characterId, close } = props;
    const [character, setCharacter] = useState(null)

useEffect(() => {
    axios.get(`${handlers}`)
    .then((res) => {
        setCharacter(res.data);
    })
    .catch(err => {
        console.log(err)
    })
}, [characterId])


    return (
        <div className='container'>
            <h2>Details (of character with id {characterId}):</h2>
            {character && (
                <>
                <p>
                    {character.name}
                </p>
                </>
            )}
            <button onClick={close}>Close</button>
        </div>
    )
}

export default Character