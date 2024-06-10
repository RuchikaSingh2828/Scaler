// Problem Description
// Akash likes playing with strings. One day he thought of applying following operations on the string in the given order:

// Concatenate the string with itself.
// Delete all the uppercase letters.
// Replace each vowel with '#'.
// You are given a string A of size N consisting of lowercase and uppercase alphabets. Return the resultant string after applying the above operations.

// NOTE: 'a' , 'e' , 'i' , 'o' , 'u' are defined as vowels.

// Problem Constraints
// 1<=N<=100000

// Input Format
// First argument is a string A of size N.

// Output Format
// Return the resultant string.

// Example Input
// Input 1:
// A="aeiOUz"
// Input 2:
// A="AbcaZeoB"

// Example Output
// Output 1:
// "###z###z"
// Output 2:
// "bc###bc###"

// Example Explanation
// Explanatino 1:
// First concatenate the string with itself so string A becomes "aeiOUzaeiOUz".
// Delete all the uppercase letters so string A becomes "aeizaeiz".
// Now replace vowel with '#', A becomes "###z###z".
// Explanatino 2:
// First concatenate the string with itself so string A becomes "AbcaZeoBAbcaZeoB".
// Delete all the uppercase letters so string A becomes "bcaeobcaeo".
// Now replace vowel with '#', A becomes "bc###bc###".

const stringManipulation = function (A) {
  // aeiOUz
  // on del uppercase aeiz
  // replacing vowels with '#' : ###z
  // concatinating by itslef : ###z###z
  // Since strings a re immutable convert it into array
  let arrString = [];
  for (let i = 0; i < A.length; i++) {
    if (
      A[i].charCodeAt(0) >= 'A'.charCodeAt(0) &&
      A[i].charCodeAt(0) <= 'Z'.charCodeAt(0)
    ) {
      continue;
    }

    switch (A[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        arrString.push('#');
        break;
      default:
        arrString.push(A[i]);
    }
  }

  return arrString.join('').concat('', arrString.join(''));
};

console.log(stringManipulation('aeiOUz'));
