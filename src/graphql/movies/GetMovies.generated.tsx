import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type GetMoviesQueryVariables = {
  search?: Types.Maybe<Types.Scalars['String']>;
  searchBy?: Types.Maybe<Types.Scalars['String']>;
};


export type GetMoviesQuery = (
  { __typename?: 'Query' }
  & { movies: (
    { __typename?: 'MoviesResponse' }
    & { data: Array<(
      { __typename?: 'Movie' }
      & Pick<Types.Movie, 'id' | 'title' | 'tagline' | 'vote_average' | 'vote_count' | 'release_date' | 'poster_path' | 'overview' | 'budget' | 'revenue' | 'genres' | 'runtime'>
    )> }
  ) }
);


export const GetMoviesDocument = gql`
    query GetMovies($search: String, $searchBy: String) {
  movies(search: $search, searchBy: $searchBy) @rest(type: "MoviesResponse", path: "movies?{args}") {
    data @type(name: "Movie") {
      id
      title
      tagline
      vote_average
      vote_count
      release_date
      poster_path
      overview
      budget
      revenue
      genres
      runtime
    }
  }
}
    `;
export type GetMoviesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMoviesQuery, GetMoviesQueryVariables>
    } & TChildProps;
export function withGetMovies<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMoviesQuery,
  GetMoviesQueryVariables,
  GetMoviesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMoviesQuery, GetMoviesQueryVariables, GetMoviesProps<TChildProps, TDataName>>(GetMoviesDocument, {
      alias: 'getMovies',
      ...operationOptions
    });
};

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *      search: // value for 'search'
 *      searchBy: // value for 'searchBy'
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, baseOptions);
      }
export function useGetMoviesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, baseOptions);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesQueryResult = ApolloReactCommon.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;