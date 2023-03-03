function solution(numbers) {
    let arr = [0,1,2,3,4,5,6,7,8,9].reduce((a,b)=>a+b,0)
    let num = numbers.reduce((a,b)=>a+b,0)
    console.log(arr)
    return arr-num;
}
    

   