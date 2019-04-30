import {create} from 'react-test-renderer';
import React from 'react';
import PieceIcon from './PieceIcon';

describe('PieceIcon', () => {
  [
    {player: 'white', piece: 'king'},
    {player: 'white', piece: 'queen'},
    {player: 'white', piece: 'rook'},
    {player: 'white', piece: 'bishop'},
    {player: 'white', piece: 'knight'},
    {player: 'white', piece: 'pawn'},
    {player: 'black', piece: 'king'},
    {player: 'black', piece: 'queen'},
    {player: 'black', piece: 'rook'},
    {player: 'black', piece: 'bishop'},
    {player: 'black', piece: 'knight'},
    {player: 'black', piece: 'pawn'},
  ].forEach(({player, piece}) => {
    it(`should display a ${player} ${piece}`, () => {
      const element = create(<PieceIcon player={player} piece={piece} />);
      expect(element).toMatchSnapshot();
    });
  });
});
