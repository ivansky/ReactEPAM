import React from 'react';
import Card from './Card';
import ResultSorting from './ResultSorting';
import { Movie} from './types';
import './SearchResult.scss';
import { useGetMoviesQuery } from "../../../../graphql/movies/GetMovies.generated";
import Pending from "../Pending";

type Props = {
    searchQuery: string;
    searchBy: string | null;
}

const SearchResult: React.FC<Props> = props => {
    const { searchQuery, searchBy } = props;

    const { data, loading } = useGetMoviesQuery({
        variables: {
            search: searchQuery || undefined,
            searchBy: searchBy || undefined
        }
    });

    const sortingOptions = ['releaseDate', 'rating'];
    const movies = data?.movies.data ?? [];

    return loading ? <Pending /> : (
        <>
            <ResultSorting
                numberOfItems={10}
                sortingOptions={sortingOptions}
                activeOption={sortingOptions[0]}
                handleSwitchSorting={undefined}
            />
            <div className='search-result-container'>
                <div className='search-result'>
                    {movies.map(
                        (movie, index) =>
                            <Card
                                action={(movie) => undefined}
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                genres={movie.genres}
                                releaseDate={movie.release_date}
                                imageURL={movie.poster_path}
                                rating={movie.vote_average}
                                description={movie.overview}
                                runtime={movie.runtime}
                            />
                        )}
                </div>
            </div>
        </>
    );
};

/*
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

    handleClick = (movie: Movie) => {
        this.props.action(movie);
    }

    render() {
        const moviesSorted = this.props.movies;
        if (this.state.activeSortingOption === 'releaseDate') {
            this.sortByReleaseDate(moviesSorted);
        }
        if (this.state.activeSortingOption === 'rating') {
            this.sortByRating(moviesSorted);
        }
            
        const setSearchResult = moviesSorted.map(
            (movie: Movie, index) =>
                <Card
                    action = {(movie) => this.handleClick(movie)}
                    id = {movie.key}
                    key = {movie.key}
                    title = {movie.title}
                    genres = {movie.genres}
                    releaseDate = {movie.releaseDate}
                    imageURL = {movie.imageURL}
                    rating = {movie.rating}
                    description = {movie.description}
                    runtime = {movie.runtime}
                />
        );
        const sortingOptions = Object.keys(this.state.sortBy);
        return (
            <>
                <ResultSorting
                    numberOfItems={this.props.movies.length}
                    sortingOptions={sortingOptions}
                    activeOption={sortingOptions[0]}
                    handleSwitchSorting={this.switchSorting}
                />
                <div className='search-result-container'>
                    <div className='search-result'>
                        {setSearchResult}
                    </div>
                </div>
            </>
        );
    }
}*/

export default SearchResult;