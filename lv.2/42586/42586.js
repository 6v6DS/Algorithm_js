function solution(progresses, speeds) {
    let result = [];
    let count = 0;
    for(let i = 0; i < progresses.length; i++){
        if(progresses[i] < 100){
            for(let j = progresses[i]; j < 100; j += speeds[i]){
                count++;
                if(j + speeds[i] > 99){
                    result.push(count);
                    count = 0;
                }
            }
        }
    }
    console.log(result)
    
    let answer = [];
    let deployDay = result[0];
    let deployCount = 1;

    for (let i = 1; i < result.length; i++) {
        if (result[i] <= deployDay) {
            deployCount++;
        } else {
            answer.push(deployCount);
            deployDay = result[i];
            deployCount = 1;
        }
    }
    answer.push(deployCount);
    return answer;
    
}
console.log(solution([90, 90, 90], [1, 5, 4])) // [3]
