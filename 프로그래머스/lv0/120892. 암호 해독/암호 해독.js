function solution(cipher, code) {
  var answer = [];
  const newArr = cipher.split("");
  console.log(newArr);
  for (let i = 1; i <= cipher.length; i++) {
    if (i % code === 0) {
      answer.push(newArr[i - 1]);
    }
  }
  return(answer.join(""));
}