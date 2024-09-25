function solution(s){
    let ans = true;
    let count = 0;
    let count2 = 0;
    let stack = [];
    let stack2 = [];
    s = s.split("");
    if(s[0] == ')'){
        return false;
    }
    s.forEach((e, i) => {
        if(e == '('){
            stack.push(i);
            count++;
        }else{
            stack2.push(i);
            count2++;
        }
    })
    for(let i = 0; i < s.length; i++){
        if(stack[i] > stack2[i]){
            return false;
        }
    }
    if(ans == true){
        if(count == count2){
            return true;
        }else{
            return false;
        }
    }
    return ans;
}

