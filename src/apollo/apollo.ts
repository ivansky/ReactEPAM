import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

export function createApolloClient() {
    const cache = new InMemoryCache();

    // setup your `RestLink` with your endpoint
    const restLink = new RestLink({
        uri: "https://reactjs-cdp.herokuapp.com/"
    });

    // setup your client
    const client = new ApolloClient({
        link: restLink,
        cache,
    });

    return client;
}
