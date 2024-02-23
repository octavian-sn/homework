import React from 'react';
import CharacterList from '../components/CharacterPage/CharacterPage';
import CharacterSearch from '../components/CharacterSearch/CharacterSearch';
import { AppDataContextProvider } from '../context/AppDataContext';
import './index.css'

const Home: React.FC = () => {
  return (
    <AppDataContextProvider>
      <div className='content'>
        <img className='banner' src="./banner.png" alt="Star Wars logo" />
        <h1>“Do. Or do not. There is no try.”</h1>
        <CharacterSearch />
        <CharacterList />
      </div>
    </AppDataContextProvider>
  );
};

export default Home;
