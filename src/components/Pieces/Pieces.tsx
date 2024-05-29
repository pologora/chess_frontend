import Piece from './Piece';
import style from './Pieces.module.css';

const Pieces = () => {
  const position = new Array(8).fill(null).map(() => new Array(8).fill(null));
  position[0][0] = 'rook_b';
  position[0][1] = 'knight_b';
  position[0][2] = 'bishop_b';
  position[0][3] = 'queen_b';
  position[0][4] = 'king_b';
  position[0][5] = 'bishop_b';
  position[0][6] = 'knight_b';
  position[0][7] = 'rook_b';

  position[7][0] = 'rook_w';
  position[7][1] = 'knight_w';
  position[7][2] = 'bishop_w';
  position[7][3] = 'queen_w';
  position[7][4] = 'king_w';
  position[7][5] = 'bishop_w';
  position[7][6] = 'knight_w';
  position[7][7] = 'rook_w';

  for (let i = 0; i < 8; i++) {
    position[1][i] = 'pawn_b';
    position[6][i] = 'pawn_w';
  }
  console.log(position);

  return (
    <div className={style.pieces}>
      {position.map((r, rank) =>
        r.map((_, file) => {
          return position[rank][file] ? (
            <Piece
              key={rank + file}
              rank={rank}
              file={file}
              piece={position[rank][file]}
            />
          ) : null;
        }),
      )}
    </div>
  );
};
export default Pieces;
