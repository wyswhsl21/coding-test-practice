function solution(arr) {
  let answer = [];
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let x of arr) {
    let d = parseInt(x.toString().split('').reverse().join(''));

    if (isPrime(d)) {
      answer.push(d);
    }
  }
  return answer;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
