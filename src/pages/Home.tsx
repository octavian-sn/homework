import React from 'react';
import CharacterList from '../components/CharacterPage/CharacterPage';
import CharacterSearch from '../components/CharacterSearch/CharacterSearch';
import { AppDataContextProvider } from '../context/AppDataContext';

const Home: React.FC = () => {
  return (
    <AppDataContextProvider>
      <div>
        <h1>Welcome to Star Wars Characters App!</h1>

        <CharacterSearch />
        <CharacterList />
      </div>
    </AppDataContextProvider>
  );
};

export default Home;
