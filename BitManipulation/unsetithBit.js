// Unset the ith bit of a no if its set

const checkSetBit = (n, k) => {
  if ((n & (1 << k)) === 0) return false;
  return true;
};

const unsetithBit = (n, i) => {
  if (checkSetBit(n, i)) {
    n = n ^ (1 << i);
  }
  return n;
};

console.log(unsetithBit(6, 2)); // 2
