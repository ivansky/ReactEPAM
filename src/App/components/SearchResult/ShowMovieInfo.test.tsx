import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ShowMovieInfo from './ShowMovieInfo';
const props = {
    key: 1,
    title: 'MovieName',
    genres: ['Action','Drama'],
    releaseDate: '2018',
    imageURL: 'URL',
    rating: 9,
    description: 'Movie description',
    runtime: 120
}
describe('<ShowMovieInfo/> rendering', () => {
    const showMovieInfo = shallow(<ShowMovieInfo {...props}/>)
    it('should renders correctly',() => {
        expect(showMovieInfo).toMatchSnapshot();
    })
});