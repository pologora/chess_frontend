import { GameState } from '../../constants';
import { position } from '../../helpers/helpers';
import { actionTypes } from './actions/actionTypes';

export type Action = {
  type: keyof typeof actionTypes;
  payload: position;
};

export const reducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case actionTypes.NEW_MOVE: {
      const turn = state.turn === 'b' ? 'w' : 'b';
      const positions = [...state.positions, action.payload];

      return {
        ...state,
        positions,
        turn,
      };
    }

    default:
      return state;
  }
};
