function solution(price, money, count) {
    let answer = 0;
    
    for(let i = 1; count > 0; i++){
        money = money - (price * i);
        count--;
        if(money < 0){
            answer = Math.abs(money);
        }
    }
    return answer;
}
