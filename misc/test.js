const rotate = (A, B) => {
  let setB = new Set();
  for (let i = 0; i < B.length; i++) {
    setB.add(B[i]);
  }
  let mapA = new Map();
  let maxCount = 1;
  for (let i = 0; i < A.length; i++) {
    if (!setB.has(A[i])) {
      if (mapA.has(A[i])) {
        let count = mapA.get(A[i]) + 1;
        maxCount = Math.max(maxCount, count);
        mapA.set(A[i], count);
      } else {
        mapA.set(A[i], 1);
      }
    }
  }
  let ans = '';
  mapA.forEach((val, key) => {
    if (val === maxCount) {
      if (ans === '') ans = key;
      else {
        ans = ans < key ? ans : key;
      }
    }
  });
  return ans;
};

const A = ['bc', 'c', 'aa', 'c', 'a', 'a', 'bc', 'aa', 'b'];
const B = ['a'];
console.log(rotate(A, B));
