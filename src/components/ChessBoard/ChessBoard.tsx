import { createBoard } from '../../helpers/helpers';
import style from './ChessBoard.module.css';
import '../../board.css';
import Pieces from '../Pieces/Pieces';

const ChessBoard = () => {
  return (
    <div className={style.chessBoard}>
      {createBoard()}
      <Pieces />
    </div>
  );
};

export default ChessBoard;
