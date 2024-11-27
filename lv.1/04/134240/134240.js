function solution(food) {
    if(food.lenght < 2 || food.length > 9){
        return 0;
    }
    let answer = [];
    let again = 0;
    let count = -1;
    
    for(let i = 0; i < food.length; i++){
        count++;
        if(food[i] > 1){
            again = Math.floor(food[i] / 2);
            answer.push(`${count}`.repeat(again));  
        }
    }

    return answer.join("") + 0 + answer.reverse().join("");
}
