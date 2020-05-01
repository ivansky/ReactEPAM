import Button from './Button';
import React from 'react';
import { shallow, render } from 'enzyme';

describe('<Button /> rendering', () => {

    it('renders correctly', () => {
        const btn = shallow(<Button content='Search' action = {() => console.log('Button clicked!')}/>)
        expect(btn).toMatchSnapshot();
    });

    it('should have correct className', () => {
        const btn = shallow(<Button content='Search' action = {() => console.log('Button clicked!')}/>)
        expect(btn.find('button').hasClass('button')).toEqual(true);
    });

    it('should handle onClick event', () => {
        const mockConsoleLog = jest.fn();
        const btn = shallow(
          <Button content='Search' action = {mockConsoleLog}/>
        );
        btn.find('button').simulate('click');
        expect(mockConsoleLog.mock.calls.length).toEqual(1);
    });
})