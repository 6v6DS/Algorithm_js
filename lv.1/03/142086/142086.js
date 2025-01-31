function solution(s) {
    let log = [];
    let answer = [];
    
    [...s].forEach((e) => {
        if(log.includes(e) == false){
            answer.push(-1);
            log.push(e);
        }else{
            answer.push(log.length - log.lastIndexOf(e));
            log.push(e);
        }
    })
    
    return answer;
}