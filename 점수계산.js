function solution(a) {
  let answer = 0;
  let max = 0;

  for (let x of a) {
    if (x === 1) {
      max = max + x;
      answer = answer + max;
    } else {
      max = 0;
      answer = answer + max;
    }
  }
  return answer;
}
console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
