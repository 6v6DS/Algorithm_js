function solution(k, m, score) {
    // if(k < 3 || k > 9 || m < 3 || m > 10){
    //     return 0;
    // }
    // if(score.length < 7 || score.length > 1000000){
    //     return 0;
    // }
    
    let answer = 0;
    let box = Math.floor(score.length / m);
    score = score.sort((a,b) => b - a);
    
    for(let i=1; i<=box; i++) {
        answer += score[m*i-1] * m;
    }
    return answer;
}
