import React from 'react';
import {create} from 'react-test-renderer';
import ChessBoard from './ChessBoard';

describe('ChessBoard', () => {
  it("should render the chess board from white's point of view", () => {
    const element = create(<ChessBoard orientation="white" />);
    expect(element).toMatchSnapshot();
  });

  it("should render the chess board from black's point of view", () => {
    const element = create(<ChessBoard orientation="black" />);
    expect(element).toMatchSnapshot();
  });
});
