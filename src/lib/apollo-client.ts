import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'https://api-qa.seamasterai.com/graphql',
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
}); 