import {shallow} from 'enzyme';
import React from 'react';
import ChessBoard from './ChessBoard';

describe('ChessBoard', () => {
  it('renders without crashing', () => {
    const element = shallow(<ChessBoard />);
    expect(element).not.toBeNull();
  });
});
