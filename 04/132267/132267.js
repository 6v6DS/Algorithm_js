function solution(a, b, n) {    
    let result = 0;
    let M = 0;
    let left = 0;
    let answer = [];
    
    for(;;){
        M = Math.floor(n/a);
        left = n - (a * M);
        result = b*M;
        answer.push(result);
        n = result + left;
        if(n < a){
            break;
        }
    }
    
    let sum = 0;
    answer.forEach((e) => {
        sum = sum + e;
    })
    
    return sum;
}

