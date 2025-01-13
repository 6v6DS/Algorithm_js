function solution(num, total) {
    let answer = [];
    let mid = total / num;
    if(Number.isInteger(mid) == true){
        answer.push(mid);
        for(let i = 1;i < num / 2; i++){
            answer.push(mid - i);
            answer.push(mid + i);
        }
    }else{
        mid = parseInt(mid);
        answer.push(mid);
        for(let i = 1; i < num / 2; i++){
            answer.push(mid - i);
            answer.push(mid + i);
            answer.push(mid + i + 1);
        }
    }
    
    return answer.sort((a,b) => a - b).filter((e, i) => answer.indexOf(e) === i);
}
console.log(solution(7, 28)) //[1, 2, 3, 4, 5, 6, 7]
console.log(solution(10, 55))//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(solution(8, 36)) //[-2, -1, 0, 1, 2, 3, 4, 5]
