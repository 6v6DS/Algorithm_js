function solution(s) {
    let str = s.split(" ");
    let NewStr = [];

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str[i].length; j++){
            if(j % 2 == 0){
                NewStr.push(str[i][j].toUpperCase());
            }else{
                NewStr.push(str[i][j].toLowerCase());
            }
        }
        NewStr.push(' ');
    }
    NewStr = NewStr.slice(0, -1);
    
    return NewStr.join('');
}