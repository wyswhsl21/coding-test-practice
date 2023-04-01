//항상 양수로 받아야 하고 
// 제곱근이 맞다면 x+1
// 아니라면 -1 return
///////////////////////////////
//방법 1. Math.sqrt(n) === 이게 정수면 true 아니면 false -1 1.isInteger 2. parseInt 3.
//1-2 정수인걸 또 음수인지 양수인지 판별해서 
//return 

function solution(n) {
    var answer = 0;
    let m = Math.sqrt(n)
    if(Number.isInteger(m) == false ) {
        return answer -1;// isInteger는 정수이면 true 정수가 아니면 false boolean 형식으로 나타낸다.
    } else if ( Math.sign(m) < 0) {
        return answer -1;
    }else {
        return answer= (m+1) ** 2
    }
    return answer;
    }
    

