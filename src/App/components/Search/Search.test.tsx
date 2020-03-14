import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Search from './Search';
import Button from '../common/Button';
import Filter from './components/Filter';

const props = {
    filterOptions: ['title', 'genres'],
}

describe('<Search/> rendering', () => {
    const search = shallow(<Search {...props}/>)
    it('should renders correctly',() => {
        expect(search).toMatchSnapshot();
    })
})
describe('<Search/> interacting', () => {
    const search = mount(<Search {...props}/>);

    it('should handle switch Filter event',() => {
        const unactiveOption = search.find(Filter).find(Button).find('button').filterWhere(el => el.prop('disabled') === false);
        const methods = search.instance() as Search;
        jest.spyOn(methods, 'handleSwitchFilter');
        unactiveOption.simulate('click');
        expect(methods.handleSwitchFilter).toBeCalled();
    });
})