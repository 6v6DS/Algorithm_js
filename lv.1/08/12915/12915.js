function solution(strings, n) {
    strings = strings.sort((prev, cur) => {       
        if (prev[n] > cur[n]) return 1;
        if (prev[n] < cur[n]) return -1;
        if (prev[n] == cur[n]){
            if(prev > cur) return 1;
            if(cur > prev) return -1;
        }
    });
    return strings;
}
