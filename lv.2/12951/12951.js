function solution(s) {
    s = s.split("");
    var answer = [];
    for(let j = 0; j < s.length; j++){
         s[j] = s[j].toLowerCase();
    }
    if(s[0] != ' '){
        s[0] = s[0].toUpperCase();
    }
    for(let i = 0; i < s.length - 1; i++){
        if(s[i] == " "){
            s[i + 1] = s[i+1].toUpperCase();
        }
    }
    
        
    return s.join("");
}
