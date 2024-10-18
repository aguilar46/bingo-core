import { atomWithStorage } from 'jotai/utils';

export const touchTypes = {
  SELECT: 'select',
  VIEW: 'view',
};

export const bingoTypes = {
  TRADITIONAL: 'traditional',
  DOUBLE: 'double',
  TRIPLE: 'triple',
  BLACKOUT: 'blackout',
};

export const dataTypes = {
  GAME: 'jazz-bingo-game',
  BINGO_TYPE: 'bingo-type',
};

const board = atomWithStorage(dataTypes.GAME, null, undefined, {
  getOnInit: true,
});

const bingoType = atomWithStorage(
  dataTypes.BINGO_TYPE,
  bingoTypes.TRADITIONAL,
  undefined,
  { getOnInit: true }
);

export const atoms = {
  board,
  bingoType,
};
