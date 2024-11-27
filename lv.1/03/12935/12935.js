function solution(arr) {
    if(arr.length == 1){
        return [-1];
    }
    
    let min = Math.min(...arr);
    
    arr = arr.filter((e) => e !== min);
    
    return arr;
}
