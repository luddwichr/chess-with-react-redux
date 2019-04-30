import React from 'react';
import {create} from 'react-test-renderer';
import ChessBoard from './ChessBoard';

describe('ChessBoard', () => {
  xit("should render the chess board from white's point of view", () => {
    const element = create(<ChessBoard reverse={false} />);
    expect(element).toMatchSnapshot();
  });
  xit("should render the chess board from black's point of view", () => {
    const element = create(<ChessBoard reverse />);
    expect(element).toMatchSnapshot();
  });
});
