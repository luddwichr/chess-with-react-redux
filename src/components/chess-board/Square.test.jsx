import {shallow} from 'enzyme';
import React from 'react';
import Square from './Square';

describe('Square', () => {
  const liteColor = 'burlywood';
  const darkColor = 'saddlebrown';

  [
    {file: 'a', rank: 2},
    {file: 'a', rank: 4},
    {file: 'a', rank: 6},
    {file: 'a', rank: 8},
    {file: 'h', rank: 1},
    {file: 'h', rank: 3},
    {file: 'h', rank: 5},
    {file: 'h', rank: 7},
  ].forEach(({file, rank}) => {
    it(`should have background color '${liteColor}' for file {file} and rank {rank}`, () => {
      const square = shallow(<Square file={file} rank={rank} />);
      expect(square.prop('style')).toHaveProperty('backgroundColor', liteColor);
    });
  });
  [
    {file: 'a', rank: 1},
    {file: 'a', rank: 3},
    {file: 'a', rank: 5},
    {file: 'a', rank: 7},
    {file: 'h', rank: 2},
    {file: 'h', rank: 4},
    {file: 'h', rank: 6},
    {file: 'h', rank: 8},
  ].forEach(({file, rank}) => {
    it(`should have background color '${darkColor}' for file {file} and rank {rank}`, () => {
      const square = shallow(<Square file={file} rank={rank} />);
      expect(square.prop('style')).toHaveProperty('backgroundColor', darkColor);
    });
  });
});
