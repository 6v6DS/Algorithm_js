function solution(record) {
    let result = [];
    
    let pos = new Map();
     
    for(let i = 0; i < record.length; i++){
        let arr = record[i].split(" ");
        let state = arr[0];
        
        if(state == 'Change' || state == 'Enter'){
            let id = arr[1];
            let nickname = arr[2];
            pos.set(id, nickname);
        }
        else if(state == 'Leave'){
            continue;
        }
    }
    //console.log(pos.size)
    //console.log(pos);
    //console.log(pos1);
    for(let i = 0; i < record.length; i++){
        let arr = record[i].split(" ");
        let state = arr[0];
        
        if(state == 'Enter'){
            let id = arr[1];
            let nickname = pos.get(id);        
            result.push(`${nickname}님이 들어왔습니다.`);
                
        }
        else if(state == 'Leave'){
            let id = arr[1];
            let nickname = pos.get(id);
            result.push(`${nickname}님이 나갔습니다.`);
        
        }
    }
    //console.log(result);
    return result;
}
//console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo"]));