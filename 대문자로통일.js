function solution(s) {
  let answer = '';

  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += x.toUpperCase();
    else answer += x;

    // answer += x.toUpperCase();
  }

  return answer;
}
console.log(solution('ItisTimeToStudy'));
