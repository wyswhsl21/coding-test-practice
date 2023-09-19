function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}
console.log(solution([87, 89, 92, 100, 76]));
