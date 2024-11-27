

function solution(nums) {
    let ans = [];
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            for(let k = 0; k < j; k++){
                ans.push(nums[i] + nums[j] + nums[k]);
            }
        }
    } 
    
    function isPrime(num) {
        if(num === 2) return true;

        for(let i = 2; i<num; i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }
    
    for(let i = 0; i < ans.length; i++){
        if(isPrime(ans[i]) == true){
            count++;
        }
    }
    
    return count;
}
    
