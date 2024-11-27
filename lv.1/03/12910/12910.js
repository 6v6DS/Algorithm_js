function solution(arr, divisor) {
    let answer = [];
    arr.forEach(e => {
        if(e % divisor == 0){
            answer.push(e);
        }
    })
    if(answer == 0){
        answer.push(-1);
    }
    return answer.sort((a,b) => a - b);
}
