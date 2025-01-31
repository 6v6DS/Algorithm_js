function solution(phone_number) {
    if(phone_number.length < 4 || phone_number.lenght > 20){
        return 0;
    }
    
    let len = phone_number.length;
    let answer = "*".repeat(len-4) + phone_number.slice(-4);
    
    return answer;
}