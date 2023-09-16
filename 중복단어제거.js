function solution(s) {
  let answer;
  answer = s.filter((v, i) => s.indexOf(v) === i);
  return answer;
}
let arr = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(arr));
