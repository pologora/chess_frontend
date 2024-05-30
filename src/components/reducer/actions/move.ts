import type { position } from '../../../helpers/helpers';
import { Action } from '../reducer';

export const makeNewMove = (newPosition: position): Action => {
  return {
    type: 'NEW_MOVE',
    payload: newPosition,
  };
};
