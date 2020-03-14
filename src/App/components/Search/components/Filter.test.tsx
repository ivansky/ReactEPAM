import Filter from './Filter';
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button from '../../common/Button';

const handleSwitch = jest.fn()
const props = {
    options: ['title', 'genres'],
    activeOption: 'title',
    handleSwitch: handleSwitch
}

describe('<Filter/> rendering', () => {
    const filter = shallow(<Filter {...props} />);

    it('should renders correctly', () => {
        expect(filter).toMatchSnapshot();
    });

    it('should renders same numbers of buttons as options', () => {
        expect(filter.find(Button).length).toEqual(2);
    });

    it('should has one disabled button', () => {
        expect(filter.find(Button).findWhere(el => el.prop('disabled') === true).length).toEqual(1);
    }) 
})

describe('<Filter/> interaction', () => {
    const filter = mount(<Filter {...props} />);
    it('should handle switch event', () => {
        const btnActive = filter.find(Button).find('button').filterWhere(el => !el.prop('disabled'));
        btnActive.simulate('click');
        expect(handleSwitch.mock.calls.length).toEqual(1);
        // TODO:
        //expect(filter.find(Button).find('button').findWhere(el => el.prop('disabled') === false).length).toEqual(0);
    }) 
})