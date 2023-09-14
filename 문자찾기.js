function solution(char, arg) {
  let answer = 0;
  for (let x of char) {
    if (x === arg) answer += 1;
  }
  return answer;
}
console.log(solution('COMPUTERPROGRAMMINGR', 'C'));

// 스플릿을 이용하여 개수로 알파벳 숫자 찾기
function solution(char, arg) {
  let answer = char;
  char.split(arg);
  return answer.length - 1;
}
console.log(solution('COMPUTERPROGRAMMINGR', 'C'));
