function solution(n) {
    var answer = [];
    n = String(n).split('').reverse();
    n.forEach((e) => {
        answer.push(Number(e));
    })
    return answer;
}