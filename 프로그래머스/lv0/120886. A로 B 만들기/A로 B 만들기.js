
 function solution(before, after) {
  let answer =0;
  const a = before.split("").sort().join("");
  const b = after.split("").sort().join("");
  (a === b) ?  answer= 1 :  answer= 0
     return answer
}

