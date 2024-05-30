import style from './Pieces.module.css';

type PieceProps = {
  rank: number;
  file: number;
  piece: string;
};

const Piece = ({ rank, file, piece }: PieceProps) => {
  const positionClass = style[`p-${rank}${file}`];
  const pieceClass = style[piece];

  const onDragStart = (event: React.DragEvent<HTMLElement>) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);

    setTimeout(() => {
      (event.target as HTMLElement).style.display = 'none';
    }, 0);
  };

  const onDragEnd = (event: React.DragEvent) => {
    (event.target as HTMLElement).style.display = 'block';
  };

  return (
    <div
      className={`${style.piece} ${pieceClass} ${positionClass}`}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    ></div>
  );
};
export default Piece;
