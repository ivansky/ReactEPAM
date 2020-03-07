import React from 'react';
import Card from './Card';
import { MovieProps } from './types';

type Props = {
    movies: MovieProps[];
}

const SearchResult = (props: Props) => {
    const setSearchResult = props.movies.map(
        (movie: MovieProps) => <Card
            key = {movie.key}
            title = {movie.title}
            genres = {movie.genres}
            releaseDate = {movie.releaseDate}
            imageURL = {movie.imageURL}
        />
    );
    return (
        <div>
            {setSearchResult}
        </div>
    );
}

export default SearchResult;