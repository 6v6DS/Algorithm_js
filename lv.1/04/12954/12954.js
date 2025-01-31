function solution(x, n) {
    var answer = [];
    let y = x;
    for(let i = 0; i < n; i++){
        answer.push(x);
        x = y + x;
    }
    return answer;
}