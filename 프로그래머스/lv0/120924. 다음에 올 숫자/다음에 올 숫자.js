function solution(common) {
    // common 의 길이는 무조건 3이상.
    //등차 ,등비가 아닌 경우가 없다.
    //등비수열인 경우 공비는 0이 아닌 정수.
    //2-1 ,3-2,4-3 이 같으면 등차 아니면 등비
    if(common[1]-common[0] === common[2]-common[1]){
        return common.pop() +(common[1]-common[0])
    }else{
        return common.pop() * (common[1]/common[0])
    }
}