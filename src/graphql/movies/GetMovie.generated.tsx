import * as Types from '../../types/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type GetMovieQueryVariables = {
  id: Types.Scalars['Int'];
};


export type GetMovieQuery = (
  { __typename?: 'Query' }
  & { movie?: Types.Maybe<(
    { __typename?: 'Movie' }
    & Pick<Types.Movie, 'id' | 'title' | 'tagline' | 'vote_average' | 'vote_count' | 'release_date' | 'poster_path' | 'overview' | 'budget' | 'revenue' | 'genres' | 'runtime'>
  )> }
);


export const GetMovieDocument = gql`
    query GetMovie($id: Int!) {
  movie(id: $id) @rest(type: "Movie", path: "movies/{args.id}") {
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
    `;
export type GetMovieProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMovieQuery, GetMovieQueryVariables>
    } & TChildProps;
export function withGetMovie<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMovieQuery,
  GetMovieQueryVariables,
  GetMovieProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMovieQuery, GetMovieQueryVariables, GetMovieProps<TChildProps, TDataName>>(GetMovieDocument, {
      alias: 'getMovie',
      ...operationOptions
    });
};

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, baseOptions);
      }
export function useGetMovieLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, baseOptions);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = ApolloReactCommon.QueryResult<GetMovieQuery, GetMovieQueryVariables>;