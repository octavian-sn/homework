import { gql } from '@apollo/client';

export const CHARACTER_LIST = gql`
  query GetCharacterList($first: Int!, $after: String) {
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
