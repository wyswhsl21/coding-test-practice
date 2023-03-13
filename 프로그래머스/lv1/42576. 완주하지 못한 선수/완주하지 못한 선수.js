function solution(participant, completion) {
    let part = participant.sort()
    let comple = completion.sort()
    let rows = participant.length;
    let Looser = "";
for (let i = 0; i < rows; i++) {
    if(part[i] !== comple[i]) {
        Looser = part[i]
        break;
    } 
    
    
}
    return Looser;
    
}