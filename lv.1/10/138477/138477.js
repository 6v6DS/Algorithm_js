function solution(k, score) {
    let str = [];
    let answer = [];
    for(let i = 0; i < score.length; i++){
        str.push(score[i]);
        str.sort((a,b) => b - a);
        if(str.length == k + 1){
            str.pop();
        }
        answer.push(Math.min.apply(null, str));
    }
    return answer;
}