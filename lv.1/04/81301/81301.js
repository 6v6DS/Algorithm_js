function solution(s) {
    for(let i = 0; i < s.length; i++){
        if(s.includes('zero')){
        s = s.replace('zero', 0)
        }
        if(s.includes('one')){
        s = s.replace('one', 1)
        }
        if(s.includes('two')){
            s = s.replace('two', 2)
        }
        if(s.includes('three')){
            s = s.replace('three', 3)
        }
        if(s.includes('four')){
            s = s.replace('four', 4)
        }
        if(s.includes('five')){
            s = s.replace('five', 5)
        }
        if(s.includes('six')){
            s = s.replace('six', 6)
        }
        if(s.includes('seven')){
            s = s.replace('seven', 7)
        }
        if(s.includes('eight')){
            s = s.replace('eight', 8)
        }
        if(s.includes('nine')){
            s = s.replace('nine', 9)
        }
    }
    
    return Number(s);
    
}

console.log(solution("1zerotwozero3"));
