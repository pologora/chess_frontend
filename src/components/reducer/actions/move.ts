import type { position } from '../../../helpers/helpers';
import { Action } from '../reducer';
import { actionTypes } from './actionTypes';

export const makeNewMove = (newPosition: position): Action => {
  return {
    type: actionTypes.NEW_MOVE,
    payload: newPosition,
  };
};
