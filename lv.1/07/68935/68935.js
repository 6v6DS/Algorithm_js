function solution(n) {
    let ex = [];
    let T = [];
    let j = 0;
    let sum = 0;
    while(n > 0)
    {
        ex.push(n % 3);
        n = Math.floor(n / 3);
    }
    for(let i = ex.length; i > 0; i--){
        T.push(ex[j] * 3 ** (i - 1));
        j++;
    }
    T.forEach(e => {
        sum += e;
    })
    
    return sum;
}
console.log(solution(45));
console.log(solution(125));