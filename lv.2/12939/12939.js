function solution(s) {
    let num = s.split(" ");
    let answer = [];
    answer.push(Math.min(...num), Math.max(...num));
    return answer.join(" ");
}