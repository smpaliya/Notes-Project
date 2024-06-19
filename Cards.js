import React, { useState, useEffect } from 'react';

export default function Cards() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <title>Rick and Morty Character Generator</title>
      <div id="cards-container">
        {characters.map(character => (
          <div key={character.id} className="card">
            <img src={character.image} alt={character.name} className="card-img" />
            <h3>Name: {character.name}</h3>
            <h3>Species: {character.species}</h3>
            <button className="empty">Like</button>
          </div>
        ))}
      </div>
    </>
  );
}
