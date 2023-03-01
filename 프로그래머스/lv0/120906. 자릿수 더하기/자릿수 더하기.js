function solution(n) {
    const number= String(n).split("").map((item)=>Number(item))
    return number.reduce((acc,cur)=>acc+cur,0)
}