import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Card from './Card';
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
describe('<Card/> rendering', () => {
    const card = shallow(<Card {...props}/>)
    it('should renders correctly',() => {
        expect(card).toMatchSnapshot();
    })
});