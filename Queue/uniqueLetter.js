// Imagine you're a teacher. You ask students to call out a letter one by one. After each letter, you jot down the very first letter that's only been called out once. If all letters have been repeated, you write "#".

// Here's a scenario:

// A student says "a". It's the first letter. You write "a".
// Next, a student says "b", "a" is still unique, so you add "a". Now it's "aa".
// A student says "a" again. Now, "b" is the unique one. You add "b", making it "aab".
// A student says "b". All letters so far are repeated. You add "#". It becomes "aab#".
// A student says "c". "c" is unique. You add "c". The final is "aab#c".
// Your task? Given the sequence the students call out A, determine the string on the board.

// Problem Constraints

// 1 <= |A| <= 100000

// Input Format

// The only argument given is string A.

// Output Format

// Return a string after processing the stream of lowercase alphabets A.

// Example Input

// Input 1:

//  A = "abadbc"
// Input 2:

//  A = "abcabc"

// Example Output

// Output 1:

// "aabbdd"
// Output 2:

// "aaabc#"

function uniqueLetter(A) {
  let queue = [];
  let charCount = {};
  let result = '';

  for (let i = 0; i < A.length; i++) {
    let char = A[i];
    charCount[char] = (charCount[char] || 0) + 1;

    // Enqueue the current character
    queue.push(char);

    // Dequeue characters until we find a unique one
    while (queue.length > 0 && charCount[queue[0]] > 1) {
      queue.shift();
    }

    // Append the first unique character or '#' if none exists
    result += queue.length > 0 ? queue[0] : '#';
  }

  return result;
}
