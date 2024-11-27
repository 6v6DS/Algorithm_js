function solution(arr) {
    var answer = 0;
    let sum = 0;

    if(arr.length < 1 || arr.length > 100){
        return 0;
    }

    arr.forEach((e) => {
        sum = e + sum;
    })

    answer = sum / arr.length;

    return answer;
}
