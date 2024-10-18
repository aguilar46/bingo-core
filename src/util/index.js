import _ from 'lodash';

export const getBingoTypeDisplayName = (key) =>
  key[0].toUpperCase() + key.slice(1);

const buildFreeSpace = () => ({
  full: 'Free Space',
  isSelected: true,
});

export const createNewBoard = (options) => {
  const boardSpaces = _.shuffle(options).map((option) => ({
    full: option,
  }));
  const newBoard = _.chunk(boardSpaces, 5).slice(0, 5);

  newBoard[2][2] = buildFreeSpace();

  return newBoard;
};

export const generateClassname = (...names) => names.filter(Boolean).join(' ');
