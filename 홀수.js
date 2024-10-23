function solution(arr) {
  let answer = [],
    single = [],
    min;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) single.push(arr[i]);
  }
  let sum = single.reduce((a, c) => a + c, 0);
  min = Math.min(...single);
  answer.push(sum);
  answer.push(min);
  return answer;
}
let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
