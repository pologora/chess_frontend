import style from './Pieces.module.css';

type PieceProps = {
  rank: number;
  file: number;
  piece: string;
};

const Piece = ({ rank, file, piece }: PieceProps) => {
  const positionClass = style[`p-${rank}${file}`];
  const pieceClass = style[piece];

  console.log(file, rank, piece);

  return (
    <div
      className={`${style.piece} ${pieceClass} ${positionClass}`}
      draggable={true}
    ></div>
  );
};
export default Piece;
