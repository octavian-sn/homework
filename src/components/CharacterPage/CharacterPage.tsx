import React, { useState, useEffect } from 'react';
import { useAppDataContext } from '../../context/AppDataContext';
import CharacterCard from '../CharacterCard/CharacterCard';
import './index.css';
import { RevolvingDot } from 'react-loader-spinner';

const PAGE_SIZE = 10;

const CharacterPage: React.FC = () => {
  const { characters, loading } = useAppDataContext();
  const [currentPage, setCurrentPage] = useState(1);

  // Reset current page when characters change
  useEffect(() => {
    setCurrentPage(1); 
  }, [characters]);

  if (loading) {
    return <RevolvingDot
    visible={true}
    height="80"
    width="80"
    color="#000000"
    ariaLabel="revolving-dot-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />; // Display a loading spinner while characters are being fetched
  }

  if (!characters || characters.length === 0) {
    return <p>No characters available.</p>;
  }

  // Calculate the total number of pages
  const totalPages = Math.ceil(characters.length / PAGE_SIZE);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  // Slice the characters array based on the current page
  const charactersOnPage = characters.slice(startIndex, endIndex);

  // Next page
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className="character-list">
        {charactersOnPage.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterPage;
