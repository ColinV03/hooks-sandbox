import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';



export default function FetchPokemon() {
  const [CurrPokemon, setCurrPokemon] = useState({})
  
  //initial
    useEffect(() => {
       fetch(`https://pokeapi.co/api/v2/pokemon/1`)
         .then((response) => response.json())
         .then((data) => setCurrPokemon(data));

    }, [])
   
  

  function logPokemon() {
    console.log(CurrPokemon.name);
  }
  function randomNumber() {
    let random = Math.floor(Math.random() * 100) + 1; 
    return random
  }
  function getPokemon() {
    let result = randomNumber();
    fetch(`https://pokeapi.co/api/v2/pokemon/${result}`)
      .then(response => response.json())
      .then(data => setCurrPokemon(data));
    logPokemon();
    
  }
    
  return (
      <div>
        <h1>pokemon!</h1>
        <button onClick={getPokemon}> Get Random! </button>
        <button onClick={logPokemon}> log</button>
        
        <PokemonCard params={CurrPokemon}/>
      </div>
    );


}
