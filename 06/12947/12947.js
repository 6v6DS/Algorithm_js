function solution(x) { 
    let y = String(x).split('');
    var sum = 0;
    
    y.forEach((e) => {sum += Number(e)})
    
    return x % sum == 0 ? true : false;
}
