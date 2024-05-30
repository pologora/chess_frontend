export type position = string[][];

const ranks = Array(8)
  .fill(null)
  .map((_, i) => 8 - i);

const files = Array(8)
  .fill(null)
  .map((_, i) => String.fromCharCode(i + 97));

const createBoard = () => {
  const ranks = Array(8)
    .fill(null)
    .map((_, i) => i + 1);
  const files = Array(8)
    .fill(null)
    .map((_, i) => String.fromCharCode(i + 97));

  return ranks.map((rank, i) =>
    files.map((file, j) => (
      <div
        className={`tile tile--${(j + i) % 2 === 0 ? 'light' : 'dark'}`}
        key={`${file}${rank}`}
      >
        {file === 'a' && <span className='bit bit--rank'>{8 - i}</span>}
        {rank === 8 && <span className='bit bit--file'>{file}</span>}
      </div>
    )),
  );
};

const getStartPosition = (): position => {
  const position = new Array(8).fill('').map(() => new Array(8).fill(''));
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

  return position;
};

function copyPosition(position: position) {
  const newPosition = new Array(8).fill('').map(() => new Array(8).fill(''));

  for (let i = 0; i < newPosition.length; i++) {
    for (let j = 0; j < newPosition.length; j++) {
      newPosition[i][j] = position[i][j];
    }
  }
  return newPosition;
}

export { createBoard, files, ranks, getStartPosition, copyPosition };
