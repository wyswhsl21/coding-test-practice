function solution(a) {
  let answer = '';
  a = a.toUpperCase();
  let reverse = a.split('').reverse().join('');

  if (a === reverse) {
    answer = 'YES';
  } else {
    answer = 'NO';
  }

  return answer;
}
console.log(solution('gooD'));

// method 사용하지 않고 푸는 방법
function sol(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) return 'NO';
  }
  return answer;
}
console.log(sol('good'));
