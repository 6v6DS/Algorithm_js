function solution(d, budget) {
    let count = 0;
    
    d = d.sort((a,b) => a - b);
    d.forEach((e) => {
        if(budget - e > -1){
            count++;
            budget = budget  - e;
        }
    })
    return count;
    
}