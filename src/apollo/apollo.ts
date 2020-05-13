import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import isBrowser from "is-browser";

export function createApolloClient() {
    const initialState = isBrowser ? (window as any).__APOLLO_STATE__ : null;

    const cache = new InMemoryCache().restore(initialState || {});

    // setup your `RestLink` with your endpoint
    const restLink = new RestLink({
        uri: "https://reactjs-cdp.herokuapp.com/",
    });

    // setup your client
    const client = new ApolloClient({
        link: restLink,
        cache,
    });

    return client;
}
