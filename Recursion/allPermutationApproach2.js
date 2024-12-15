// peint all the permutation combintation for an givenarray without using extra space .

// in this we willhave just the auxilliary space

const permutationCombination = (A) => {
  let ans = new Array();
  recurPermute(0, A, ans);
  return ans;
};

const recurPermute = (index, arr, ans) => {
  if (index === arr.length - 1) {
    let ds = [...arr];
    ans.push(ds);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    swap(index, i, arr);
    recurPermute(index + 1, arr, ans);
    swap(index, i, arr);
  }
};

const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(permutationCombination([1, 2, 3]));
console.log(permutationCombination([1, 2, 3, 4]));
// [
//   [1, 2, 3, 4],
//   [1, 2, 4, 3],
//   [1, 3, 2, 4],
//   [1, 3, 4, 2],
//   [1, 4, 2, 3],
//   [1, 4, 3, 2],
//   [2, 1, 3, 4],
//   [2, 1, 4, 3],
//   [2, 3, 1, 4],
//   [2, 3, 4, 1],
//   [2, 4, 1, 3],
//   [2, 4, 3, 1],
//   [3, 1, 2, 4],
//   [3, 1, 4, 2],
//   [3, 2, 1, 4],
//   [3, 2, 4, 1],
//   [3, 4, 1, 2],
//   [3, 4, 2, 1],
//   [4, 1, 2, 3],
//   [4, 1, 3, 2],
//   [4, 2, 1, 3],
//   [4, 2, 3, 1],
//   [4, 3, 1, 2],
//   [4, 3, 2, 1],
// ];
console.log(permutationCombination([1, 2, 2]));
// [
//   [1, 2, 2],
//   [1, 2, 2],
//   [2, 1, 2],
//   [2, 2, 1],
//   [2, 1, 2],
//   [2, 2, 1],
// ];
console.log(permutationCombination([1, 'a', true]));
// [
//   [1, 'a', true],
//   [1, true, 'a'],
//   ['a', 1, true],
//   ['a', true, 1],
//   [true, 1, 'a'],
//   [true, 'a', 1],
// ];
