function solution(absolutes, signs) {
    if(absolutes.length < 1 || absolutes.length > 1000){
        return 0;
    }
    let answer = 0;
    for(let i = 0; i < signs.length; i++){
        if(signs[i] == true){
            answer += absolutes[i]
        }else{
            answer -= absolutes[i]
        }
    }
    return answer;
}