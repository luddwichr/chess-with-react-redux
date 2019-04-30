import PropTypes from 'prop-types';
import React from 'react';
import Square from './Square';
import './ChessBoard.css';

const ChessBoard = props => {
  const {orientation} = props;
  const whiteAtBottom = orientation === 'white';
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
  const cells = ranks.map(rank =>
    files.map(file => <Square key={`square-${file}-${rank}`} file={file} rank={rank} />)
  );
  return (
    <div className="ChessBoard" style={{direction: whiteAtBottom ? 'ltr' : 'rtl'}}>
      {whiteAtBottom ? cells : cells.reverse()}
    </div>
  );
};

ChessBoard.propTypes = {
  orientation: PropTypes.oneOf('white', 'black').isRequired,
};

export default ChessBoard;
