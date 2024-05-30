import { GameContextProvider } from '../../contexts/GameContext';

type GlobalContextsWrapperType = {
  children: React.ReactNode;
};

const GlobalContextsWrapper = ({ children }: GlobalContextsWrapperType) => {
  return <GameContextProvider>{children}</GameContextProvider>;
};
export default GlobalContextsWrapper;
