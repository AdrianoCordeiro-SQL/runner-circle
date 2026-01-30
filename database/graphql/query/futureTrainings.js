import { gql } from '@apollo/client';

export const GET_FUTURE_TRAININGS = gql`
  query GetFutureTrainings {
    allFutureTrainings {
      title
      date
      plannedDistance
    }
  }
`;
