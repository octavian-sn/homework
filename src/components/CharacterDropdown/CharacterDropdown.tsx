import React from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTER_DETAILS } from '../../queries/characterDetails';
import { CharacterDetails } from '../../types';

interface Props {
  characterId: string;
}

const CharacterDropdown: React.FC<Props> = ({ characterId }) => {
  const { loading, error, data } = useQuery<CharacterDetails>(CHARACTER_DETAILS, {
    variables: { id: characterId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.person) return <p>Data not available.</p>;

  console.log(data)

  const {
    height,
    mass,
    birthYear,
    hairColor,
    eyeColor,
    homeworld,
    filmConnection,
  } = data.person;

  // Sort from newest to oldest
  const sortedFilms = filmConnection.films.slice().sort((a, b) => {
    return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
  });

  return (
    <div>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Birth Year: {birthYear}</p>
      <p>Hair Color: {hairColor}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Homeworld: {homeworld?.name}</p>
      <p>Orbital Period: {homeworld?.orbitalPeriod}</p>
      <p>Films:</p>
      <ul>
        {sortedFilms.map((film) => (
          <li key={film.id}>{film.title} - Release Date: {film.releaseDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDropdown;
