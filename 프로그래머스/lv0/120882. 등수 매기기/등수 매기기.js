function solution(score) {
    let arr = new Array(score.length).fill(1)
    let devide = score.map((i)=>(i[0]+i[1])/2)
    for(let i=0; i< devide.length; i++){
        for(let j=0; j< devide.length;j++){
            if(devide[i]<devide[j]){
                arr[i]++
            }
        }
    }
    return arr;
    
}