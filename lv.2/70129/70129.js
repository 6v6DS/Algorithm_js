function solution(s) {
    s = s.split("");
    let count = 0;
    let zero = 0;
    for(let i = 0; s.length > 1; i++){
        let str = 0;
        zero += [...s].filter((e) => e == 0).length;
        s = [...s].filter((e) => e  == 1);
        str = s.length;
        count++;
        s = str.toString(2);
    }
    return [count, zero];
}