function solution(nums) {
    const half = nums.length / 2;
    const answer = 0;
    nums = new Set(nums);
    //console.log(nums)
    if(nums.size < half){
        return nums.size;
    }else{
        return half;
    }
}
