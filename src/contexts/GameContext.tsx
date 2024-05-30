import { Dispatch, createContext, useContext, useReducer } from 'react';
import { type Action, reducer } from '../components/reducer/reducer';
import { GameState, initGameState } from '../constants';

type GameContextProviderType = {
  children: React.ReactNode;
};

type GameContextType = {
  appState: GameState;
  dispatch: Dispatch<Action>;
};
const GameContext = createContext<GameContextType | null>(null);

const GameContextProvider = ({ children }: GameContextProviderType) => {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  return <GameContext.Provider value={{ appState, dispatch }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('No context! Wrap your component in PositionContextProvider.');
  }

  return context;
};

export { useGameContext, GameContextProvider };
