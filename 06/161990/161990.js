function solution(wallpaper) {
    let lux = [];
    let luy = []; //시작점
    let rds = [];
    let rdy = []; //끝점
    let answer = [];
    
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] == '#'){
                lux.push(i);
                luy.push(j);
                rds.push(i+1);
                rdy.push(j+1);
            }
        }
    }
    lux = lux.sort((a, b) => a - b);
    luy = luy.sort((a, b) => a - b);
    rds = rds.sort((a, b) => b - a);
    rdy = rdy.sort((a, b) => b - a);
    
    answer.push(lux[0], luy[0], rds[0], rdy[0]);
    return answer;
}
