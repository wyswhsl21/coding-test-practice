/**
 *@function
 *@description
 */
function solution(a, b, c) {
  let cnt = 0;
  let sum = 0;
  let lt = (rt = 0);
  for (let rt = 0; rt < a; rt++) {
    sum += c[rt];
    if (sum === b) cnt++;
    while (sum >= b) {
      sum -= c[lt++];
      if (sum === b) {
        cnt++;
      }
    }
  }
  return cnt;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
