// function solution(n) {
//     if(Math.sqrt(n) % 1 == 0){
//         n = Math.sqrt(n)+1;
//         return n * n;
//     }else{
//         return -1;
//     }
// }
function solution(n) {
    for(let i = 0; i <= n; i++){
        if(i * i == n){
            return (i + 1) * (i + 1)
        }
    }
    return -1;
}