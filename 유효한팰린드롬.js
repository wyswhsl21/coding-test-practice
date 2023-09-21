function solution(s) {
  let answer = 'YES';

  s = s.toLowerCase();
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (
      (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) ||
      (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122)
    ) {
      if (s[i] !== s[s.length - i - 1]) {
        return 'NO';
      }
    }
  }
  return answer;
}
console.log(solution('found7, time: study; Yduts; emit, 7Dnuod'));
