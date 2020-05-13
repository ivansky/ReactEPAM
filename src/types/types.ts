export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Movie = {
   __typename?: 'Movie';
  id: Scalars['Int'];
  title: Scalars['String'];
  tagline: Scalars['String'];
  vote_average: Scalars['Int'];
  vote_count: Scalars['Int'];
  release_date: Scalars['String'];
  poster_path: Scalars['String'];
  overview: Scalars['String'];
  budget: Scalars['Int'];
  revenue: Scalars['Int'];
  genres: Array<Scalars['String']>;
  runtime: Scalars['Int'];
};

export type MoviesResponse = {
   __typename?: 'MoviesResponse';
  data: Array<Movie>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
   __typename?: 'Query';
  movies: MoviesResponse;
  movie?: Maybe<Movie>;
};


export type QueryMoviesArgs = {
  search?: Maybe<Scalars['String']>;
  searchBy?: Maybe<Scalars['String']>;
};


export type QueryMovieArgs = {
  id: Scalars['Int'];
};
