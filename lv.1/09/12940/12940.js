function solution(n, m) {
    if(n > m){
        let a = n;
        n = m;
        m = a;
    }
    return gcd_lcm(n, m);
}
function gcd_lcm(n, m){
    let answer = [];
    let answer2 = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            answer.push(i);
        }
    }
    for(let i = 1; i <= m; i++){
        if(m % i === 0){
            answer2.push(i);
        }
    }
    let gcd = 0;
    answer2.forEach(e => {
        if(answer.includes(e)){
            gcd = e;
        }
    })
    let lcm = 0;
    lcm = (n * m) / gcd;
    return [gcd, lcm];
}
