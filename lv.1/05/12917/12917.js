function solution(s) {
    var Lower = [];
    var Upper = [];
    for(let i = s.length - 1; i > -1; i--){
        if(s[i] === s[i].toUpperCase()){
            Upper.push(s[i]);
        }
        if(s[i] === s[i].toLowerCase()){
            Lower.push(s[i]);
        }
    }
    let answer = [];
    Upper.sort((a, b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
    });
    Lower.sort((a, b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
    });
    answer.push(Lower, Upper);
    return answer.join("").replace(/,/g, "");
}
