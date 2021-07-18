import React from 'react';



export default function PokemonCard(params) {
    const { name, id } = params.params;

    function logParams() {
        console.log(params)
    }


    return (
      <div>
            <h1> Pokemon Card: </h1>
            <button onClick={logParams}>Log Pokemon</button>
        <h3>Name: {name} </h3>
            <h3>ID: {id}</h3>
      </div>
    );    
}
