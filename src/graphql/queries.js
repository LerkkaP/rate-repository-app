import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          name
          ownerName
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      name
      ownerName
      fullName
      reviewCount
      ratingAverage
      forksCount
      stargazersCount
      description
      language
      ownerAvatarUrl
      url
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
