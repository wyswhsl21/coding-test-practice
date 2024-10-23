function solution(s, n) {
  let answer = '';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowcase = 'abcdefghijklmnopqrstuvwxyz';
  const message = s.split(''); // ["a","b" .............]
  for (let i = 0; i <= message.length; i++) {
    if (message[i] === ' ') {
      answer += ' ';
      continue;
    }
    //소문자인지 확인
    if (lowcase.includes(message[i])) {
      const location = lowcase.indexOf(message[i]);
      if (location + n >= lowcase.length) {
        const max = location + n;
        const code = lowcase[max - lowcase.length];
        answer += code;
      } else {
        const code = lowcase[location + n];
        answer += code;
      }

      //대문자인 경우에는
    } else {
      if (uppercase.includes(message[i])) {
        const location = uppercase.indexOf(message[i]);
        if (location + n >= uppercase.length) {
          const max = location + n;
          const code = uppercase[max - uppercase.length];
          answer += code;
        } else {
          const code = uppercase[location + n];
          answer += code;
        }
      }
    }
  }
  return answer;
}


