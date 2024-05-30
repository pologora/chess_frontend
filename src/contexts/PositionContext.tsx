import { Dispatch, createContext, useContext, useReducer } from 'react';
import { type Action, reducer } from '../components/reducer/reducer';
import { GameState, initGameState } from '../constants';

type PositionContextProviderType = {
  children: React.ReactNode;
};

type PositionContextType = {
  appState: GameState;
  dispatch: Dispatch<Action>;
};
const PositionContext = createContext<PositionContextType | null>(null);

const PositionContextProvider = ({ children }: PositionContextProviderType) => {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  return <PositionContext.Provider value={{ appState, dispatch }}>{children}</PositionContext.Provider>;
};

const usePositionContext = () => {
  const context = useContext(PositionContext);

  if (!context) {
    throw new Error('No context! Wrap ');
  }

  return context;
};

export { usePositionContext, PositionContextProvider };
