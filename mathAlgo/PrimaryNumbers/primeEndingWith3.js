function primeNumberInRangeEndingWith3(A, B) {
  const sieveArr = (range) => {
    let arr = new Array(range + 1).fill(true);
    arr[0] = arr[1] = false;

    for (let i = 2; i <= range; i++) {
      for (let j = i * i; j <= range; j = j + i) {
        arr[j] = false;
      }
    }
    return arr;
  };

  const primeArry = sieveArr(B);
  const ans = [];
  for (let i = A; i <= B; i++) {
    if (primeArry[i] && i % 10 === 3) {
      ans.push(i);
    }
  }
  return ans;
}

console.log(primeNumberInRangeEndingWith3(10, 100));
// Sample output: [13, 23, 43, 53, 73, 83];
console.log(primeNumberInRangeEndingWith3(1, 50));
// Sample output: [3, 13, 23, 43];
