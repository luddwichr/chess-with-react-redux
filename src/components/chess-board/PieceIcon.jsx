import React from 'react';
import PropTypes from 'prop-types';
import ChessPieces from './chess-pieces.svg';

const PieceIcon = ({player, piece}) => (
  <svg style={{display: 'block'}} viewBox="0 0 44 44">
    <use xlinkHref={`${ChessPieces}#icon-${player}-${piece}`} />
  </svg>
);

PieceIcon.propTypes = {
  player: PropTypes.oneOf(['black', 'white']).isRequired,
  piece: PropTypes.oneOf(['king', 'queen', 'rook', 'bishop', 'knight', 'pawn']).isRequired,
};

export default PieceIcon;
