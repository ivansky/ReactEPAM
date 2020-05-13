import React, { useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import throttle from 'lodash/throttle';
import Button from '../common/Button';
import Input from '../common/Input';
import Filter from './components/Filter';

import './Search.scss';

interface SearchProps {
    filterOptions: string[];
    searchQuery: string;
    onSearchQueryChange(nextQuery: string): void;
}

const Search: React.FC<SearchProps> = props => {
    const { filterOptions, onSearchQueryChange } = props;
    const [option, setOption] = useState<string | undefined>(filterOptions[0]);
    const history = useHistory();

    const handleInputChange = useMemo(() => {
        const throttledInputChange = throttle(onSearchQueryChange, 200);

        return function(e: React.ChangeEvent<HTMLInputElement>) {
            const targetValue = e.target.value;

            // Replace URL path
            history.replace(`/search/${targetValue}`);

            // Call throttled searchValue update handler
            throttledInputChange(targetValue);
        }
    }, [history, onSearchQueryChange]);

    const handleInputSubmit = () => {
        // if (e.key === 'Enter') {
        //     handleSearch();
        //     localStorage.setItem(LocalStorageKeys.LAST_SEARCH, state.inputValue);
        //     history.push(`/search/${state.inputValue}`);
        // }
    };

    const handleButtonSubmit = () => {};

    const handleSwitchFilter = (e: React.MouseEvent) => {
        setOption((e.target as HTMLInputElement).value);
    };

    return (
        <div className='search-container'>
            <div className='search'>
                <Link to='/' className='search-title'>
                    <h1 >Netflixroulette</h1>
                </Link>
                <h2>Find your movie</h2>
                <Input
                    type='text'
                    changeAction={handleInputChange}
                    submitAction={handleInputSubmit}
                />
                <div className='search-filter-container'>
                    <Filter
                        options={filterOptions}
                        activeOption={option}
                        handleSwitch={
                            (e: React.MouseEvent) => handleSwitchFilter(e)
                        }
                    />
                    <Button content='Search' action={handleButtonSubmit}/>
                </div>
            </div>
        </div>
    )
};

export default Search;