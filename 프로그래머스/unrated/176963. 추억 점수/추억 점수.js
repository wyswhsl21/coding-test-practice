function solution(name, yearning, photo) {
  var answer = new Array(photo.length).fill(0);
  photo.map(
    (
      v,
      i //[may,kein,kain,radi],
    ) =>
      //['may', 'kein', 'brin', 'deny'],
      //['kon', 'kain', 'may', 'coni']//
      name.map((item, index) => {
       
        if (v.includes(item)) {
          answer[i] += yearning[index];
        }
      })
  );
  return answer;
}