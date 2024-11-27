function solution(n) {
    let str = "수박"
    if(n % 2 == 0){
        str = str.repeat(n / 2)
    }else{
        str = str.repeat(n / 2) + "수";
    }    
    return str;
}
