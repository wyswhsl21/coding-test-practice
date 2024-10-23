function solution(arr) {
  let answer = arr,
    sum,
    flag = 0;
  sum = arr.reduce((a, c) => a + c, 0);
  for (let i = 0; i <= 8; i++) {
    for (let j = i + 1; j <= 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }
  return answer;
}
let arr = [21, 7, 22, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
