import { getStartPosition, position } from './helpers/helpers';

export type GameState = {
  position: position;
  turn: 'w' | 'b';
};

export const initGameState: GameState = {
  position: getStartPosition(),
  turn: 'w',
};
