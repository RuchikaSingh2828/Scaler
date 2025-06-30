// find all the possible permutation combination
const permutationCombination = (A) => {
  let ans = new Array(); // to store al the permutation comninations
  let ds = []; // diffrent combination
  let freq = new Set(); // freq of elements at each index

  recurPermute(A, ans, ds, freq);
  return ans;
};

const recurPermute = (arr, ans, ds, freq) => {
  if (ds.length === arr.length) {
    let comb = [...ds];
    ans.push(comb);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!freq.has(i)) {
      freq.add(i);
      ds.push(arr[i]);
      recurPermute(arr, ans, ds, freq);
      freq.delete(i);
      ds.pop();
    }
  }
};

console.log(permutationCombination([1, 2, 3]));
// console.log(permutationCombination([1, 2, 3, 4]));
// // [
// //   [1, 2, 3, 4],
// //   [1, 2, 4, 3],
// //   [1, 3, 2, 4],
// //   [1, 3, 4, 2],
// //   [1, 4, 2, 3],
// //   [1, 4, 3, 2],
// //   [2, 1, 3, 4],
// //   [2, 1, 4, 3],
// //   [2, 3, 1, 4],
// //   [2, 3, 4, 1],
// //   [2, 4, 1, 3],
// //   [2, 4, 3, 1],
// //   [3, 1, 2, 4],
// //   [3, 1, 4, 2],
// //   [3, 2, 1, 4],
// //   [3, 2, 4, 1],
// //   [3, 4, 1, 2],
// //   [3, 4, 2, 1],
// //   [4, 1, 2, 3],
// //   [4, 1, 3, 2],
// //   [4, 2, 1, 3],
// //   [4, 2, 3, 1],
// //   [4, 3, 1, 2],
// //   [4, 3, 2, 1],
// // ];
// console.log(permutationCombination([1, 2, 2]));
// // [
// //   [1, 2, 2],
// //   [1, 2, 2],
// //   [2, 1, 2],
// //   [2, 2, 1],
// //   [2, 1, 2],
// //   [2, 2, 1],
// // ];
// console.log(permutationCombination([1, 'a', true]));
// // [
// //   [1, 'a', true],
// //   [1, true, 'a'],
// //   ['a', 1, true],
// //   ['a', true, 1],
// //   [true, 1, 'a'],
// //   [true, 'a', 1],
// // ];
