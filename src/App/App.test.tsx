import React from 'react';
import { shallow, render, mount } from 'enzyme';
import App from './App';

describe('<App/> rendering', () => {
  const app = shallow(<App />)
  it('should renders correctly',() => {
      expect(app).toMatchSnapshot();
  })
});