function solution(n)
{
    let answer = String(n).split('');
    let sum = 0;
    answer.forEach((e) => {
        sum = sum + Number(e);
    })
    
    return sum;
}
