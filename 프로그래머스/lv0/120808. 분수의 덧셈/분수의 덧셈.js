function solution(a, b, c, d) {
    var answer = [];
    let molecule = b*c + a*d
    let denominator = b*d
    let maximum = 1
    for(let i= 1; i <= molecule; i++){
        if(molecule%i === 0 && denominator%i === 0){
            maximum = i
        }
    }
    return [molecule/maximum,denominator/maximum]
  
}