import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters {
    allPeople {
      totalCount
      people {
        id
        name
        height
        mass
        birthYear
        hairColor
        eyeColor
        homeworld {
          id
          name
          orbitalPeriod
        }
        filmConnection {
          films {
            id
            title
            releaseDate
          }
        }
      }
    }
  }
`;
