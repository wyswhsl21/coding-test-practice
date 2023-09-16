function solution(s) {
  let answer = '';
  for (let i = 0; i <= s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution('ksekkset'));

//중복된 단어 카운팅 하는방법

// function solution(s) {
//   let answer = 0;
//   let pos = s.indexOf('k');
//   while (pos !== -1) {
//     answer++;
//     pos = s.indexOf('k', pos + 1);
//   }
//   return answer;
// }
// console.log(solution('ksekkset'));
