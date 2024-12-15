// Q2. Merge Overlapping Intervals

// Problem Description
// Given a collection of intervals, merge all overlapping intervals.

// Problem Constraints
// 1 <= Total number of intervals <= 100000.

// Input Format
// First argument is a list of intervals.

// Output Format
// Return the sorted list of intervals after merging all the overlapping intervals.

// Example Input
// Input 1:

// [1,3],[2,6],[8,10],[15,18]

// Example Output
// Output 1:

// [1,6],[8,10],[15,18]

// Example Explanation
// Explanation 1:

// Merge intervals [1,3] and [2,6] -> [1,6].
// so, the required answer after merging is [1,6],[8,10],[15,18].
// No more overlapping intervals present.

const mergeOverlappingIntervals = (intervals) => {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return -a[1] + a[1];
    return a[0] - b[0];
  });
  let cs = intervals[0][0];
  let ce = intervals[0][1];
  const res = [];
  for (let i = 1; i < intervals.length; i++) {
    let s = intervals[i][0];
    let e = intervals[i][1];

    if (s <= ce) {
      cs = cs;
      ce = Math.max(ce, e);
    } else if (ce < s) {
      res.push([cs, ce]);
      cs = s;
      ce = e;
    }
  }
  res.push([cs, ce]);
  return res;
};

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(mergeOverlappingIntervals(intervals));

// [1,6],[8,10],[15,18]
