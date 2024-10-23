function sol(arr) {
  let answer = arr.split('');
  let s = arr[0];
  let ctn = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === s) {
      s = arr[i];
      ctn++;
    } else {
      s = arr[i];
      if (ctn > 1) {
        answer.splice(i, 0, ctn);
        ctn = 1;
      }
    }
  }
  answer = new Set([...answer]);
  answer = [...answer].join('');
  return answer;
}
console.log(sol('KKHSSSSSSSE'));

// 선생님 코드
function solution(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) {
        answer += String(cnt);
        cnt = 1;
      }
    }
  }

  return answer;
}
console.log(solution('KKHSSSSSSSE'));
