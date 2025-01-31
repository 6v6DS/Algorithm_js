function solution(number, limit, power) {
    let result = [];
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++; 
                if (j !== i / j) {
                    count++; 
                }
            }
        }
        result.push(count);
    }
    
    result.forEach((e) => {
        if(e > limit){
            e = power;
        }
        answer += e;
    })
    return answer;
}