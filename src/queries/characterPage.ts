import { gql } from '@apollo/client';

export const CHARACTER_PAGE = gql`
  query GetCharacterPage($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      people {
        id
        name
        homeworld {
          id
          name
        }
      }
    }
  }
`;
