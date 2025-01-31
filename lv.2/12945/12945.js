function solution(n) {
    let f0 = 0;
    let f1 = 1;
    let answer = 0;
    for(let i = 1; i < n; i++){
        answer = (f0 + f1) % 1234567;
        f0 = f1;
        f1 = answer;
    }
    return answer;
}