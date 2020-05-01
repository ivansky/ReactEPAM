import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SearchResult from './SearchResult';
const movie = {
    key: 1,
    title: 'MovieName',
    genres: ['Action','Drama'],
    releaseDate: '2018',
    imageURL: 'URL',
    rating: 9,
    description: 'Movie description',
    runtime: 120
}
const props = {
    action: () => {console.log(movie)},
    movies: [
        {
            key: 1,
            title: 'MovieName',
            genres: ['Action','Drama'],
            releaseDate: '2018',
            imageURL: 'URL',
            rating: 9,
            description: 'Movie description',
            runtime: 120
        },
        {
            key: 1,
            title: 'MovieName',
            genres: ['Action','Drama'],
            releaseDate: '2018',
            imageURL: 'URL',
            rating: 9,
            description: 'Movie description',
            runtime: 120
        }
    ]
}
describe('<SearchResult/> rendering', () => {
    const searchResult = shallow(<SearchResult {...props}/>)
    it('should renders correctly',() => {
        expect(searchResult).toMatchSnapshot();
    })
});