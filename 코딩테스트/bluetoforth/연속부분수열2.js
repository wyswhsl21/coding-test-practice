/**
 *@function 투포인트 알고리즘 문제
 *@description 연속 부분수열 2
 */
function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = (rt = 0);
  let n = arr.length;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}
let arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr));
