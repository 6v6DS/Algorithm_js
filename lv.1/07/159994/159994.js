function solution(cards1, cards2, goal) {
    let count = 0;
    for(let i = 0; i < goal.length; i++){
        if(cards1[0] == goal[i]){
            count++;
            cards1.shift();
        }else if(cards2[0] == goal[i]){
            count++;
            cards2.shift();
        }
    }
    if(count == goal.length){
        return "Yes";
    }else{
        return "No";
    }
}
