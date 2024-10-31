/**
 *@function 최대매출
 *@description 최대매출 알고리즘 문제 풀이
 */
function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;

  let n = arr.length;
  for (let i = 0; i < m; i++) {
    sum += arr[i];
  }
  answer = sum;

  for (rt = m; rt < n; rt++) {
    sum += arr[rt] - arr[lt++];

    if (answer < sum) {
      answer = sum;
    }
  }
  return answer;
}
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr));
