function solution(clothes) {
    let clothesMap = new Map(clothes);
    const mix = new Map();
    let result = [];
    let answer = [];
    
    for(const [key, value] of clothesMap.entries()){
        if(mix.has(value)){
            mix.get(value).push(key);
        }else{
            mix.set(value,[key]);
        }
    }
    
    mix.forEach((v, k, map) => {
        if(map.size == 1){
            answer.push(v.length);
        }else if(map.size > 1){
            answer.push(v.length + 1);
        }
    })
    
    if(answer.length > 1){
        let answer2 = 1;
        for(const i of answer){
            answer2 *= i
        }
        return answer2 - 1;
    }
    
    return Number(answer);
}
