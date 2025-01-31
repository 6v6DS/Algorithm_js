function solution(s) {
    if(s.length != 4 && s.length != 6){
        return false;
    }
    let count = 0;
    let answer = [];
    [...s].forEach((e) => {
        if(e == Number(e)){
            answer.push(Number(e));
        }else{
            answer.push(e);
        }
    })
    for(let i = 0; i < s.length - 1; i++){
        if(typeof(answer[i]) != typeof(answer[i+1])){
            count++;
        }
    }
    if(count > 0){
        return false;
    }else{
        return true;
    }
}