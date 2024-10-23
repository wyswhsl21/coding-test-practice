function sol(s) {
  let answer = '';
  s = s.replace(/[^0-9]/g, '');
  answer = s.indexOf(0);
  answer = s.substring(answer + 1, s.length);
  return answer;
}
console.log(sol('g0en2T0s8eSoft'));
//부끄러운 나의 코드 ㅠㅠ

//
function solution(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) answer += s[i];
  }
  return parseInt(answer);
}
console.log(solution('g0en2T0s8eSoft'));
