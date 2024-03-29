import ApolloClient from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {InMemoryCache} from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.error(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
                if (networkError) {
                    console.error(`[Network error]: ${networkError}`);
                }
          }),
          new HttpLink({
            uri: 'https://countries.trevorblades.com/graphql',
            credentials: 'same-origin'
          })
    ]),
    cache: new InMemoryCache()
});

export default client;
