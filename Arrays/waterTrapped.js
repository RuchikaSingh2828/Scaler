// calculating the total amount of water trapped between buildings based on their heights:

const waterTrapped = (A) => {
  const n = A.length;
  let lmax = 0;
  let rmax = 0;
  let total = 0;
  let r = n - 1;
  let l = 0;
  while (l < r) {
    if (A[l] <= A[r]) {
      if (lmax > A[l]) {
        total += lmax - A[l];
      } else {
        lmax = A[l];
      }
      l++;
    } else {
      if (rmax > A[r]) {
        total += rmax - A[r];
      } else {
        rmax = A[r];
      }
      r--;
    }
  }
  return total;
};

console.log(waterTrapped([4, 2, 0, 3, 2, 5])); //9
console.log(waterTrapped([0, 5, 0, 5, 0])); // 5
console.log(waterTrapped([1, 3, 2, 1, 2, 1, 5, 2, 1, 3, 4])); // 12
