function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }
  return answer;
}
console.log(solution('KoreaTimeGood'));
