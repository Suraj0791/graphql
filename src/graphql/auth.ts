import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
        role
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation Signup($username: String!, $email: String!, $password: String!, $role: String!, $confirmed: Boolean!) {
    signup(username: $username, email: $email, password: $password, role: $role, confirmed: $confirmed) {
      token
      user {
        id
        username
        email
        role
      }
    }
  }
`;

export const GET_USERS_QUERY = gql`
  query GetUsers {
    users {
      id
      username
      email
      role
      confirmed
      createdAt
    }
  }
`; 