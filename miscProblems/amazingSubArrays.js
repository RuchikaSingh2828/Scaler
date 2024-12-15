//         let charA = A.split('');
let count = 0;
let N = charA.length;
for (i = 0; i < N; i++) {
  switch (A[i]) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      count = count + (N - i);
    default:
      break;
  }
}
return count % 10003;
