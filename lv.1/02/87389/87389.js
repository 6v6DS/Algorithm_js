function solution(n) {   
    if(n < 3 || n > 1000000){
        return 0;
    }
 
    for(let x = 0; x < n; x++){
        if(n % x == 1){
            return x;
        }
    }
}