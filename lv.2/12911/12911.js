function solution(n) {
    let len = n.toString(2).split("").filter(e => e === '1').length;
    let answer = 0;
    for(let i = n+1;;i++){
        let len2 = i.toString(2).split("").filter(e => e === '1').length;
        if(len == len2){
            return i;
        }
    }
}
