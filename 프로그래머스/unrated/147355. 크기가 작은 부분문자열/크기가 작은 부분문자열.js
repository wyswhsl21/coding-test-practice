function solution(t, p) {
var answer = 0;
  let arr = [];
 
  let length = t.length-p.length;
  for (let i = 0; i <= length; i++) {
    let val = t.substr(i, p.length);
    arr.push(val);
  }
  arr.map((v, i) => (Number(v) <= Number(p) ? answer++ : 0));
  return answer;
}