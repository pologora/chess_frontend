import { PositionContextProvider } from '../../contexts/PositionContext';

type GlobalContextsWrapperType = {
  children: React.ReactNode;
};

const GlobalContextsWrapper = ({ children }: GlobalContextsWrapperType) => {
  return <PositionContextProvider>{children}</PositionContextProvider>;
};
export default GlobalContextsWrapper;
