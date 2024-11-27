function solution(seoul) {
    if(seoul.length < 1 || seoul.lenght > 1000){
        return 0;
    }
    
    var answer = 0;
    
    answer = seoul.indexOf("Kim");
    
    return `김서방은 ${answer}에 있다`;
}
