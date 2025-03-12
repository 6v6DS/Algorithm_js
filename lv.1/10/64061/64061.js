function solution(board, moves) {
    let count = 0;
    let stack = [];
    
    for(let i = 0; i < moves.length; i++){
        moves[i] -= 1;
        
        for(let j = 0; j < board.length; j++){
            if(board[j][moves[i]] != 0){
                stack.push(board[j][moves[i]]);
                board[j][moves[i]] = 0;
                if(stack[stack.length - 1] == stack[stack.length - 2]){
                    stack.pop();
                    stack.pop();
                    count += 2;
                }
                break;
                
            }
        }
        
    }

    
    return count;
}