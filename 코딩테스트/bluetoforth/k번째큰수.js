/**
 *@function k번째 큰수
 *@description  블르투포스 문제
 */
function solution(a, b, c) {
  let arr = [];

  for (let i = 0; i < a; i++) {
    for (let j = i + 1; j < a; j++) {
      for (let k = j + 1; k < a; k++) {
        let num = c[i] + c[j] + c[k];
        arr.push(num);
      }
    }
  }
  arr.sort((a, b) => b - a);
  let answer = [];
  answer = new Set(arr);
  let uniqueArr = [...answer];
  if (b + 1 > c.length) {
    return -1;
  } else {
    return uniqueArr[b - 1];
  }
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
