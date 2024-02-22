import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries';
import { CharactersData } from '../types';

const CharacterList: React.FC = () => {
    const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if(!data) return <p>Data not available.</p>;

    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {data.allPeople.people.map((character) => (
                    <li key={character.id}>
                        {character.name} - Homeworld: {character.homeworld.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;
