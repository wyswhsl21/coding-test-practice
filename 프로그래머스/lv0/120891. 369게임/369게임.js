function solution(order) {
    var answer = 0;
  
    // 일단 숫자를 문자열로 바꾸고 나서
    const str = order.toString()
    const Arr = Array.from(str)
    
    //배열로 변환해서 find 나 filter 를 이용해서 3,6,9 가 있으면 +1 을 하거나 배열에 3,6,9 를 남겨놓고 length 를 가져와도 될거같다.
    const newArr=Arr.filter((v)=>v === "3" || v ==="6"||v==="9")
    return newArr.length
    
}