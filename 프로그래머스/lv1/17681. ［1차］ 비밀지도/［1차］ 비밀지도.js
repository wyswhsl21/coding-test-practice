function solution(n, arr1, arr2) {
  var answer = [];
  let val = [];

  for (let i = 0; i < arr1.length; i++) {
    answer.push(arr1[i] | arr2[i]);
    console.log(answer);
  }
  let newarr = answer.map((v) => v.toString(2).padStart(n,0));

  for (let i = 0; i < newarr.length; i++) {
    let newRow = '';
    for (let j = 0; j < newarr[i].length; j++) {
      newarr[i][j] === '1' ? (newRow += '#') : (newRow += ' ');
    }
    val.push(newRow);
  }
  return (val);
}