import PropTypes from 'prop-types';
import React from 'react';
import Square from './Square';
import './ChessBoard.css';

const ChessBoard = props => {
  const {reverse} = props;
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
  const cells = ranks.map(rank =>
    files.map(file => <Square key={`square-${file}-${rank}`} file={file} rank={rank} />)
  );
  return (
    <div className="ChessBoard" style={{direction: reverse ? 'rtl' : 'ltr'}}>
      {reverse ? cells.reverse() : cells}
    </div>
  );
};

ChessBoard.propTypes = {
  reverse: PropTypes.bool.isRequired,
};

export default ChessBoard;
