//

// function rowToColumnZero(A) {
//   // const row = A.length;
//   // const column = A[0].length;
//   // for (let i = 0; i < row; i++) {
//   //   for (let j = 0; j < column; j++) {
//   //     if (A[i][j] === 0) {
//   //       //column zero
//   //       for (let r = 0; r < row; r++) {
//   //         let c = j;
//   //         if (A[r][c] === 0) {
//   //           A[r][c] = 0;
//   //         } else {
//   //           A[r][c] = 'z';
//   //         }
//   //       }
//   //       //row zero
//   //       for (let c = 0; c < column; c++) {
//   //         let r = i;
//   //         if (A[r][c] === 0) {
//   //           A[r][c] = 0;
//   //         } else {
//   //           A[r][c] = 'z';
//   //         }
//   //       }
//   //     }
//   //   }
//   // }

//   // for (let i = 0; i < row; i++) {
//   //   for (let j = 0; j < column; j++) {
//   //     if (A[i][j] === 'z' || A[i][j] === 0) {
//   //       A[i][j] = 0;
//   //     }
//   //   }
//   // }

//   // return A;

//   const row = A.length;
//   const column = A[0].length;
//   let zeroIndex = [];
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < column; j++) {
//       if (A[i][j] === 0) {
//         zeroIndex.push([i, j]);
//       }
//     }
//   }
//   for (let index = 0; index < zeroIndex.length; index++) {
//     let r = zeroIndex[index][0];
//     let c = zeroIndex[index][1];
//     //column zero
//     for (let ri = 0; ri < row; ri++) {
//       A[ri][c] = 0;
//     }
//     //row zero
//     for (let ci = 0; ci < column; ci++) {
//       A[r][ci] = 0;
//     }
//   }

//   return A;
// }

// above solution is n3 time complexity

function rowToColumnZero(A) {
  const row = A.length;
  const column = A[0].length;

  for (let r = 0; r < row; r++) {
    let flag = false;
    for (let col = 0; col < column; col++) {
      if (A[r][col] === 0) flag = true;
    }
    if (flag) {
      for (let col = 0; col < column; col++) {
        if (A[r][col] != 0) A[r][col] = -1;
      }
    }
  }
  for (let col = 0; col < column; col++) {
    let flag = false;
    for (let r = 0; r < row; r++) {
      if (A[r][col] === 0) flag = true;
    }
    if (flag) {
      for (let r = 0; r < row; r++) {
        if (A[r][col] != 0) A[r][col] = -1;
      }
    }
  }

  for (let r = 0; r < row; r++) {
    for (let col = 0; col < column; col++) {
      if (A[r][col] === -1) A[r][col] = 0;
    }
  }

  return A;
}

const A = [
  [97, 18, 55, 1, 50, 17, 16, 0, 22, 14],
  [58, 14, 75, 54, 11, 23, 54, 95, 33, 23],
  [73, 11, 2, 80, 6, 43, 67, 82, 73, 4],
  [61, 22, 23, 68, 23, 73, 85, 91, 25, 7],
  [6, 83, 22, 81, 89, 85, 56, 43, 32, 89],
  [0, 6, 1, 69, 86, 7, 64, 5, 90, 37],
  [10, 3, 11, 33, 71, 86, 6, 56, 78, 31],
  [16, 36, 66, 90, 17, 55, 27, 26, 99, 59],
  [67, 18, 65, 68, 87, 3, 28, 52, 9, 70],
  [41, 19, 73, 5, 52, 96, 91, 10, 52, 21],
];
console.log(rowToColumnZero(A));
// const ans = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 14, 75, 54, 11, 23, 54, 0, 33, 23],
//   [0, 11, 2, 80, 6, 43, 67, 0, 73, 4],
//   [0, 22, 23, 68, 23, 73, 85, 0, 25, 7],
//   [0, 83, 22, 81, 89, 85, 56, 0, 32, 89],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 3, 11, 33, 71, 86, 6, 0, 78, 31],
//   [0, 36, 66, 90, 17, 55, 27, 0, 99, 59],
//   [0, 18, 65, 68, 87, 3, 28, 0, 9, 70],
//   [0, 19, 73, 5, 52, 96, 91, 0, 52, 21],
// ];
