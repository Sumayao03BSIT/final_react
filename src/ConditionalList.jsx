import React, { useState } from 'react';
import './ConditionalList.css'; 

const ConditionalList = () => {
  const [showList, setShowList] = useState(false);

  const pokemonList = [
    'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
    'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree',
    // Add more Pokémon as needed
  ];

  return (
    <div className="conditional-list-container"> {/* Apply CSS class to container */}
      <button onClick={() => setShowList(!showList)} className="toggle-button"> {/* Apply CSS class to button */}
        {showList ? 'Return to Previous Page' : 'Pokemon Data Entry'}
      </button>
      {showList && (
        <ul className="pokemon-list"> {/* Apply CSS class to list */}
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConditionalList;
