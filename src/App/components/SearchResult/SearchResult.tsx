import React from 'react';
import Card from './Card';
import ResultSorting from './ResultSorting';
import { MovieProps, SearchResultState } from './types';

type Props = {
    movies: MovieProps[];
}

class SearchResult extends React.Component<Props, SearchResultState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            sortBy: {
                releaseDate: true,
                rating: false,
            },
            activeSortingOption: 'releaseDate',
        }
    }

    sortByReleaseDate = (moviesArray: MovieProps[]) => {
        return moviesArray.sort((first: MovieProps, second: MovieProps) => first.releaseDate
            .localeCompare(second.releaseDate));
    }

    sortByRating = (moviesArray: MovieProps[]) => {
        return moviesArray.sort((first: MovieProps, second: MovieProps) => first.rating - second.rating);
    }

    switchSorting = (e: React.MouseEvent) => {
        //TODO: how it can be implement in TS?
        //      1)this.state.sortBy[active]
        //      2) {sortBy: {...this.state.sortBy, [active]: true}, activeSortingOption: newOption}
        const newOption = (e.target as HTMLInputElement).value;
        const active = Object.keys(this.state.sortBy).find(key => this.state.sortBy[key]);
        const newState = {
            sortBy: {
                ...this.state.sortBy, 
                [newOption]: true,
                [active]: false
            },
            activeSortingOption: newOption
        }
        if (newOption !== active) this.setState(newState); 
    }

    render() {
        console.log(this.state);
        //TODO: Reverse if switchSorting newOption = active
        const moviesSorted = this.props.movies;
        if (this.state.activeSortingOption === 'releaseDate') {
            this.sortByReleaseDate(moviesSorted);
        }
        if (this.state.activeSortingOption === 'rating') {
            this.sortByRating(moviesSorted);
        }
            
        const setSearchResult = moviesSorted.map(
            (movie: MovieProps) => <Card
                key = {movie.key}
                title = {movie.title}
                genres = {movie.genres}
                releaseDate = {movie.releaseDate}
                imageURL = {movie.imageURL}
                rating = {movie.rating}
            />
        );
        const sortingOptions = Object.keys(this.state.sortBy);
        return (
            <div>
                <ResultSorting
                    sortingOptions = {sortingOptions}
                    activeOption = {sortingOptions[0]}
                    handleSwitchSorting = {this.switchSorting}
                />
                {setSearchResult}
            </div>
        );
    }
}

export default SearchResult;