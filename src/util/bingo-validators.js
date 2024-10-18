import { bingoTypes } from '../data';

const checkRow = (row) => row.every((space) => space.isSelected);
const checkRows = (board) => board.some(checkRow);
const rotateBoard = (board) =>
  board[0].map((val, index) => board.map((row) => row[index]).reverse());

const checkColumns = (board) => {
  const rotatedBoard = rotateBoard(board);

  return rotatedBoard.some(checkRow);
};

const countBingos = (rows) =>
  rows.reduce((acc, row) => {
    return acc + (checkRow(row) ? 1 : 0);
  }, 0);

export const calcNumBingos = (board) => {
  const numRowBingos = countBingos(board);
  const numColBingos = countBingos(rotateBoard(board));
  const numCrossBingos = countBingos(getCross(board));

  return numRowBingos + numColBingos + numCrossBingos;
};

const getCross = (board) => [
  board.map((b, i) => board[i][i]),
  board.map((b, i) => board[i][4 - i]),
];

const checkCross = (board) => {
  const crosses = getCross(board);
  return crosses.some(checkRow);
};
const bingoValidators = {
  [bingoTypes.TRADITIONAL]: (board) =>
    checkRows(board) || checkCross(board) || checkColumns(board),
  [bingoTypes.BLACKOUT]: (board) => board.every(checkRow),
  [bingoTypes.DOUBLE]: (board) => calcNumBingos(board) > 1,
  [bingoTypes.TRIPLE]: (board) => calcNumBingos(board) > 2,
};

export default bingoValidators;
