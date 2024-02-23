import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTER_LIST } from '../../queries/characterList';
import { CharactersData } from '../../types';
import { useAppDataContext } from '../../context/AppDataContext';
import './index.css'

const CharacterSearch: React.FC = () => {
  const { setCharacters } = useAppDataContext();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { data } = useQuery<CharactersData>(CHARACTER_LIST);
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };
  
  const handleSearchClick = () => {
    if (!data || !data.allPeople) return;

    // Filter characters based on the search term
    const filteredCharacters = data.allPeople.people.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.homeworld.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update characters in the context
    setCharacters(filteredCharacters);
  };

  return (
    <div className='search'>
      <input 
        className='searchInput'
        type="text" 
        placeholder="Search by name or homeworld" 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
      <button className='searchButton' onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default CharacterSearch;
