import React, {useState} from 'react';
import { CharacterListItem } from '../../types';
import CharacterDropdown from '../CharacterDropdown/CharacterDropdown';
import './index.css'

const CharacterCard: React.FC<{ character: CharacterListItem }> = ({ character }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="character-card" onClick={toggleDropdown}>
      <img className='image' src="./star-wars-silhouette-png-16.png" alt="Yoda's silhouette" />
      <h3>{character.name}</h3>
      <p>Homeworld: {character.homeworld.name}</p>
      {isDropdownOpen && <CharacterDropdown characterId={character.id} />}
    </div>
  );
};

export default CharacterCard;
