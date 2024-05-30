import { useRef } from 'react';
import { copyPosition } from '../../helpers/helpers';
import Piece from './Piece';
import style from './Pieces.module.css';
import { useGameContext } from '../../contexts/GameContext';
import { makeNewMove } from '../reducer/actions/move';

const Pieces = () => {
  const { appState, dispatch } = useGameContext();
  const { positions } = appState;
  const position = positions[positions.length - 1];
  console.log(appState);

  const ref = useRef<HTMLDivElement>(null);

  const calcCoords = (event: React.DragEvent) => {
    if (!ref.current) {
      return { x: 0, y: 0 };
    }

    const { left, top, width } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((event.clientX - left) / size);
    const x = Math.floor((event.clientY - top) / size);
    return { x, y };
  };

  const onDrop = (event: React.DragEvent) => {
    const newPosition = copyPosition(position);

    const [piece, rank, file] = event.dataTransfer.getData('text').split(',');
    const { x, y } = calcCoords(event);

    newPosition[Number(rank)][Number(file)] = '';
    newPosition[x][y] = piece;

    dispatch(makeNewMove(newPosition));
  };

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    <div
      ref={ref}
      className={style.pieces}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {position.map((r, rank) =>
        r.map((_, file) => {
          return position[rank][file] ? (
            <Piece
              key={rank + file}
              rank={rank}
              file={file}
              piece={position[rank][file] as string}
            />
          ) : null;
        }),
      )}
    </div>
  );
};
export default Pieces;
