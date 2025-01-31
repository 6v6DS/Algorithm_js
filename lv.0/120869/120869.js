function solution(spell, dic) {
    let answer = permutation(spell, spell.length);
    for(let i = 0; i < answer.length; i++){
        if(dic.includes(answer[i])){
            return 1;
        }
    }
    return 2;
}
function permutation(arr, r, tmp = [], ans = [], isUsed = new Set()){
    if(tmp.length == r){
        ans.push([...tmp].join(""));
        return ans;
    }
    
    for(let i = 0; i < arr.length; i++){
        if(isUsed.has(i)) continue;
        isUsed.add(i);
        tmp.push(arr[i]);
        permutation(arr, r, tmp, ans, isUsed);
        tmp.pop();
        isUsed.delete(i);
    }
    
    return ans;
}