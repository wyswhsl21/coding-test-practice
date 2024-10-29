/**
 *@function 공통원소 구하기 알고리즘
 *@description
 */
// function solution(arr, arr2) {
//   let answer = [];
//   for (a of arr) {
//     if (arr2.includes(a)) {
//       answer.push(a);
//     }
//   }
//   answer.sort((a, b) => a - b);
//   return answer;
// }

//이것도 시간복잡도 때문에 투 포인터스 알고리즘으로 풀어야 한다.

/**
 *@function
 *@description
 */
function solution(a, b) {
  let answer = [];
  let n = a.length;
  let m = b.length;
  let arr = a.sort((a, b) => a - b);
  let arr2 = b.sort((a, b) => a - b);

  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (arr[p1] === arr2[p2]) {
      answer.push(arr[p1]);
      p1++;
      p2++;
    } else if (arr[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return answer;
}

let arr = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr, arr2));
