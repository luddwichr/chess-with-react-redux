import PropTypes from 'prop-types';
import React from 'react';

function getSquareColor(file, rank) {
  const oddFiles = ['a', 'c', 'e', 'g'];
  const isOddFile = oddFiles.includes(file);
  const isOddRank = rank % 2;
  return (isOddFile && isOddRank) || (!isOddFile && !isOddRank) ? 'saddlebrown' : 'burlywood';
}

const Square = props => {
  const {file, rank} = props;
  return (
    <div style={{backgroundColor: getSquareColor(file, rank)}}>
      {file}, {rank}
    </div>
  );
};

Square.propTypes = {
  file: PropTypes.oneOf(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']).isRequired,
  rank: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]).isRequired,
};

export default Square;
