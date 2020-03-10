import React from 'react';
import Card from './Card';
import ResultSorting from './ResultSorting';
import { Movie} from './types';
import ShowMovieInfo from './ShowMovieInfo';

type Props = {
    movies: Movie[];
}

type State = {
    sortBy: {
        [key: string]: boolean;
    };
    activeSortingOption: string;
}
class SearchResult extends React.Component<Props, State>{
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

    sortByReleaseDate = (moviesArray: Movie[]) => {
        return moviesArray.sort((first: Movie, second: Movie) => first.releaseDate
            .localeCompare(second.releaseDate));
    }

    sortByRating = (moviesArray: Movie[]) => {
        return moviesArray.sort((first: Movie, second: Movie) => first.rating - second.rating);
    }

    switchSorting = (e: React.MouseEvent) => {
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

    handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLInputElement;
        if (target.style.display === 'none') target.style.display = 'block';
        target.style.display = 'none';
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
            (movie: Movie, index) =>
            <div key = {movie.key} onClick = {this.handleClick}>
                <Card
                    title = {movie.title}
                    genres = {movie.genres}
                    releaseDate = {movie.releaseDate}
                    imageURL = {movie.imageURL}
                    rating = {movie.rating}
                />
                <ShowMovieInfo
                    title = {movie.title}
                    genres = {movie.genres}
                    releaseDate = {movie.releaseDate}
                    imageURL = {movie.imageURL}
                    rating = {movie.rating}
                    description = {movie.description}
                    display = {'none'}
                />
            </ div>
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