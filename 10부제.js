// function solution(n) {
//   let answer = 0;
//   let arr = [25, 23, 11, 47, 53, 17, 33];
//   for (x of arr) {
//     if (String(x).slice(-1) === String(n)) answer += 1;
//   }
//   return answer;
// }

// console.log(solution(3));

function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
