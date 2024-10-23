function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j <numbers.length; j++){
            answer.push(numbers[i]+numbers[j])
        }
       
      
    }
    return answer.filter((v,i)=>answer.indexOf(v)===i).sort((a,b)=> a-b)
}
