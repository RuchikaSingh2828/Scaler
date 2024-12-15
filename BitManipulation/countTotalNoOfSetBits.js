const checkSetBit = (n, k) => {
  if ((n & (1 << k)) === 0) return false;
  return true;
};

const totalNoOfSetBits = (n) => {
  let count = 0;
  for (let index = 0; index < 32; index++) {
    // console.log(checkSetBit(n, index));
    if (checkSetBit(n, index)) count++;
  }
  return count;
};

console.log(totalNoOfSetBits(45)); // 4
console.log(totalNoOfSetBits(12)); // 1100 // 2
