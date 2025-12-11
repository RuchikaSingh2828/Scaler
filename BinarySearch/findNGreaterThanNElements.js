// Given an unsorted array A of numbers, find the maximum integer n such that at least n elements of A are strictly greater than n. If no positive n satisfies that, return 0.

// Intuition (high level)

// Sort the array in descending order. Let the sorted sequence be b0 >= b1 >= b2 >= ....

// If the n-th largest element (b[n-1]) is > n, then there are at least n elements greater than n (namely the first n elements).

// Conversely, if b[n-1] <= n, then you cannot have n elements strictly greater than n.

// So the answer is the largest n for which b[n-1] > n.

// That monotonic property (if it holds for some n it holds for all smaller values) is what makes the sorted-scan approach correct and simple.

// Example(s)

// Example 1: A = [3, 5, 0, 1, 3]
// Sorted descending: [5, 3, 3, 1, 0]
// Check n:

// n = 1: b0 = 5 > 1 → OK

// n = 2: b1 = 3 > 2 → OK

// n = 3: b2 = 3 > 3 → false (3 is not > 3)
// → maximum n is 2.

// Example 2: A = [1,1,1]
// Sorted: [1,1,1]
// n = 1: b0 = 1 > 1 → false → answer = 0.

// Example 3: A = [100, 200, 300]
// Sorted: [300,200,100]
// n = 1..3 each holds (100 > 3 true, etc.) → answer = 3.

function findNGreaterThanNElements(A) {
    // Sort the array in descending order
    A.sort((a, b) => b - a);

    let n = 0;
    // Iterate through the sorted array
    for (let i = 0; i < A.length; i++) {
        // Check if the current element is greater than its 1-based index
        if (A[i] > i + 1) {
            n = i + 1; // Update n to the current index + 1
        } else {
            break; // No need to check further as the array is sorted
        }
    }

    return n; // Return the maximum n found
}

// Example usage:
// console.log(findNGreaterThanNElements([3, 5, 0, 1, 3])); // Output: 2
// console.log(findNGreaterThanNElements([1, 1, 1])); // Output: 0
// console.log(findNGreaterThanNElements([100, 200, 300])); // Output: 3  if 