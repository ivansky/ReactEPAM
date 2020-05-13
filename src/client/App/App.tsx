import React, { useState } from 'react';
import { Route, Switch, useParams } from 'react-router';
import Search from './components/Search/Search';
import SearchResult from './components/SearchResult/SearchResult';
import { Movie } from './components/SearchResult/types';
import ShowMovieInfo from './components/SearchResult/ShowMovieInfo';
import NotFound from './components/NotFound';
// import Pending from './components/Pending'
import './App.scss';
import { useGetMoviesQuery } from "../../graphql/movies/GetMovies.generated";

const App: React.FC = () => {
    const { searchQuery: urlSearchQuery } = useParams();
    const [searchQuery, setSearchQuery] = useState<string>(urlSearchQuery);
    const [searchBy, setSearchBy] = useState<string | null>(null);

    return (
        <div className='App'>
            <Search
                filterOptions = {['title', 'genres']}
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
            />
            <Switch>
                <Route path={`/films/:movieId`} >
                    <ShowMovieInfo />
                </Route>
                <Route path={["/search/:searchQuery", "/"]}>
                    <SearchResult
                        searchQuery={searchQuery}
                        searchBy={searchBy}
                    />
                </Route>
                <Route path="*" >
                    <NotFound />
                </Route>
            </Switch>
            <div className="footer">
                <div className="footer-content">Netflixroulette</div>
            </div>
        </div>
    );
};

export default App;