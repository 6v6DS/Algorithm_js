function solution(sizes) {
    let w = [];
    let h = [];
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            let low = sizes[i][0];
            sizes[i].shift();
            sizes[i].push(low);
        }
        w.push(sizes[i][0]);
        h.push(sizes[i][1]);
    }
    let W = Math.max(...w);
    let H = Math.max(...h);
    
    return W * H;
}