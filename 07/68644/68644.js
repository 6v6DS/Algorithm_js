function solution(numbers) {
    let nums = [];
       
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            nums.push(numbers[i] + numbers[j]);
        }
    }
    nums = nums.sort((a,b) => a - b);
    let answer = [...new Set(nums)];
    return answer;
}
