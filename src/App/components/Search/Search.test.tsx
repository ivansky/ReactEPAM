import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Search from './Search';
import Button from '../common/Button';
import Filter from './components/Filter';

const props = {
    filterOptions: ['title', 'genres'],
}

describe('<Search/> rendering', () => {
    it('should renders correctly',() => {
        const search = shallow(<Search {...props}/>);
        expect(search).toMatchSnapshot();
    })

    it('should handle switch Filter event',() => {
        const search = mount(<Search {...props}/>);
        const unactiveOption = search.find(Filter).find(Button).find('button').filterWhere(el => el.prop('disabled') === false);
        const methods = search.instance() as Search;
        jest.spyOn(methods, 'handleSwitchFilter');
        unactiveOption.simulate('click');
        expect(methods.handleSwitchFilter).toBeCalled();
    });
})