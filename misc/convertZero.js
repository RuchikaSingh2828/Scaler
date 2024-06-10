// Given A[n][n] make all elements in a row and col as zero if A[i][j]

// u need to strore the original rows and columns

const convertRowColumnZero = (A) => {
  const rowColumnZeroEl = new Array();
  for (let row in A) {
    for (let el in A[+row]) {
      if (A[+row][+el] === 0) {
        rowColumnZeroEl.push([+row, +el]);
      }
    }
  }

  for (let arr of rowColumnZeroEl) {
    let row = arr[0];
    let column = arr[1];
    // making the rows zero
    for (let el in A[row]) {
      A[row][el] = 0;
    }
    // making the columns zero
    for (let r in A) {
      A[r][column] = 0;
    }
  }
  return A;
};
const twoDArr = [
  [1, 2, 3, 4],
  [5, 6, 7, 0],
  [9, 2, 0, 4],
];
console.log(convertRowColumnZero(twoDArr));
