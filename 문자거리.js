function sol(arr, s) {
  let answer = [],
    p = 1000;
  for (let x of arr) {
    if (x !== s) {
      p++;
      answer.push(p);
    } else {
      p = 0;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - i - 1] !== s) {
      p++;
      if (p < answer[arr.length - i - 1]) {
        answer[arr.length - i - 1] = Math.min(answer[arr.length - i - 1], p);
      }
    } else {
      p = 0;
    }
  }
  return answer;
}
console.log(sol('teachermode', 'e'));

// 선생님 코드

function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
