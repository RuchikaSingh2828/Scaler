// The question is: Given an unsorted integer array, find the maximum number n such that there are at least n elements in the array greater than n.
// Let’s break this down with an explanation and step-by-step approach:
// Restatement of Problem:
// Find the largest integer n for which the array contains at least n numbers strictly greater than n.
// Example
// 	•	Input: 1, 2, 5, 7, 8, 10
// Output: n = 4
// Why? There are 5 numbers greater than 4 (5, 7, 8, 10) – but you want the maximum n such that there are at least n elements greater than n.
// 	•	
// Input: 0, 2, 7, 8, 19, 5, 45, 9, 23
// Output: n = 6


function findMaxN(arr) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    let maxN = 0;

    for (let i = 0; i <= n; i++) {
        // Use binary search to find count of elements > i
        let left = 0, right = n;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] <= i) left = mid + 1;
            else right = mid;
        }
        let countGreater = n - left;
        if (countGreater >= i) maxN = i;
    }

    return maxN;
}

// arr = [0, 2, 5, 7, 8, 9, 19, 23, 45]
// n = 9

// | i | First index with arr\[idx] > i (left) | countGreater = n - left | countGreater ≥ i? | maxN |
// | - | ------------------------------------- | ----------------------- | ----------------- | ---- |
// | 0 | 0 → all > 0                           | 9                       | ✅                 | 0    |
// | 1 | 1                                     | 8                       | ✅                 | 1    |
// | 2 | 2                                     | 7                       | ✅                 | 2    |
// | 3 | 2                                     | 7                       | ✅                 | 3    |
// | 4 | 2                                     | 7                       | ✅                 | 4    |
// | 5 | 3                                     | 6                       | ✅                 | 5    |
// | 6 | 3                                     | 6                       | ✅                 | 6    |
// | 7 | 4                                     | 5                       | ❌ (5 < 7)         | 6    |
// | 8 | 5                                     | 4                       | ❌                 | 6    |
// | 9 | 6                                     | 3                       | ❌                 | 6    |




// 🔹 Step 4: Binary Search for First Element > i
// This part uses binary search to find the first element strictly greater than i in the sorted array.

// Here’s how:

// We search for the leftmost index where arr[index] > i.

// Once the loop ends, left points to the first element > i.

// The number of elements greater than i is n - left.

// 📌 Why Binary Search?
// It reduces the time from O(n) (brute force) to O(log n) for each i, improving overall performance to O(n log n).

// Step 5: Check If This i Is Valid
// If there are countGreater numbers > i, and countGreater >= i, then this i is valid.

// So we store i as maxN (we're checking from 0 upward, so we always get the maximum valid i in the end).