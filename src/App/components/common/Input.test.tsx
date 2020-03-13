import Input from './Input';
import React from 'react';
import { shallow, render } from 'enzyme';
const changeAction = jest.fn();
const submitAction = jest.fn();
const props = {
    type: 'text',
    changeAction: changeAction,
    submitAction: submitAction,
}
const input = shallow(<Input {...props} />);

describe('<Input> rendering', () => {
    it('should renders correctly', () => {
        expect(input).toMatchSnapshot()
    })

    it('should has correct className', () => {
        expect(input.find('input').hasClass('input')).toEqual(true);
    })

    it('should has correct type', () => {
        expect(input.find('input').props().type).toEqual('text');
    }) 
});

describe('<Input> interaction', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    it('should handle onChange event', () => {
        input.find('input').simulate('change',
            { 
                target: {
                    value: '1'
                }
            }
        ).simulate('change',
            { 
                target: {
                    value: '12'
                }
            }
        );
        expect(changeAction.mock.calls.length).toEqual(2);
    });

    it('should handle onKeyUp event', () => {
        input.find('input').simulate('keyup', {key: '1'});
        expect(submitAction.mock.calls.length).toEqual(1);
    });
});