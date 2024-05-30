import { GameState } from '../../constants';
import { position } from '../../helpers/helpers';

export type Action = {
  type: 'NEW_MOVE' | 'GET';
  payload: position;
};

export const reducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case 'NEW_MOVE':
      return {
        ...state,
        position: action.payload,
        turn: state.turn === 'b' ? 'w' : 'b',
      };

    default:
      return state;
  }
};
