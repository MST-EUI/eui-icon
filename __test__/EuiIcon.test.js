import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
import EuiIcon from '../src/';

Enzyme.configure({ adapter: new Adapter() });

test('EuiIcon should render correctly', () => {
  mount(<EuiIcon />);
});

test('EuiIcon props', () => {
  const euiIcon = shallow(<EuiIcon className="test" />);
  expect(euiIcon.find('.eui-icon')).toBeTruthy();
});

