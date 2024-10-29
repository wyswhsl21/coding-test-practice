/**
 *@function
 *@description
 */
// function solution(arrLength, arr, arr2Length, arr2) {
//   let answer = [];
//   arr.forEach((v) => answer.push(v));
//   arr2.forEach((v) => answer.push(v));
//   answer.sort((a, b) => a - b);   //sort 를 사용하면 시간 복잡도가 크기 때문에 사용 하면 안된다 .. 이런 경우에
// //   투 포인터스 알고리즘을 사용해야하는데

//   return answer;
// }
// let arr = [1, 3, 5];
// let arr2 = [2, 3, 6, 7, 9];

// console.log(solution(3, arr, 5, arr2));

/**
 *@function 투 포인터스 알고리즘 공부
 *@description
 */
function solution(arr, arr2) {
  let answer = [];
  let n = arr.length;
  let m = arr2.length;
  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (arr[p1] <= arr2[p2]) {
      answer.push(arr[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }
  while (p1 < n) {
    answer.push(arr[p1++]);
  }
  while (p2 < m) {
    answer.push(arr2[p2++]);
  }
  return answer;
}

let arr = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr, arr2));
