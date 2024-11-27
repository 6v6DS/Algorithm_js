function solution(n) {
    if(n < 1 || n > 8000000000){
        return 0;
    }
    let N = String(n).split('').sort((a,b) => b-a).join('');

    return Number(N);
}
