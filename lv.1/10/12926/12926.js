function solution(s, n) {
    let answer = [];
    for(let i = 0; i < s.length; i++){
        let val = s[i].charCodeAt();       
        if(val >= 65 && val <= 90){
            if(val + n > 90){
                let space = val + n - 26;
                val = space;
            }else{
                val = val + n; 
            }
        }else if(val >= 97 && val <= 122 ){
            if(val + n > 122){
                let space = val + n - 26;
                val = space;
            }else{
                val = val + n;
            }
        }
        answer.push(String.fromCharCode(val));
    }
    return answer.join("");
}
