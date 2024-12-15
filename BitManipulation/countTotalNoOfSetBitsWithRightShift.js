const totalNoOfSetBits = (n) => {
  let count = 0;
  while (n > 0) {
    let isFirstDigitSet = n & 1;
    if (isFirstDigitSet) count++;
    n = n >> 1;
  }
  return count;
};

console.log(totalNoOfSetBits(45)); // 4
console.log(totalNoOfSetBits(12)); // 2
