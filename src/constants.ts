import { getStartPosition, position } from './helpers/helpers';

export type GameState = {
  positions: position[];
  turn: 'w' | 'b';
};

export const initGameState: GameState = {
  positions: [getStartPosition()],
  turn: 'w',
};
