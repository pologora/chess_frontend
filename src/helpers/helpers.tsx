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

export { createBoard, files, ranks };
