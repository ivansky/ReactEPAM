import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ResultSorting from './ResultSorting';

const props = {
    numberOfItems: 7,
    sortingOptions: ['releaseDate', 'genres'],
    activeOption: 'releaseDate',
    handleSwitchSorting: () => console.log(),
}

describe('<ResultSorting/> rendering', () => {
    const resultSorting = shallow(<ResultSorting {...props}/>)
    it('should renders correctly',() => {
        expect(resultSorting).toMatchSnapshot();
    })
});