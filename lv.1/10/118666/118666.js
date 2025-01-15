function solution(survey, choices) {
    let R = 0, T= 0, C = 0, F = 0, J = 0, M = 0, A = 0, N = 0;
    for(let i = 0; i < choices.length; i++){
        if(survey[i][0] == 'R'){
            if(choices[i] > 4){
                if(choices[i] == 5) T = T + 1;
                if(choices[i] == 6) T = T + 2;
                if(choices[i] == 7) T = T + 3;
            }
            if(choices[i] < 4){
                if(choices[i] == 3) R = R + 1;
                if(choices[i] == 2) R = R + 2;
                if(choices[i] == 1) R = R + 3;
            }
        }
        if(survey[i][0] == 'T'){
            if(choices[i] > 4){
                if(choices[i] == 5) R = R + 1;
                if(choices[i] == 6) R = R + 2;
                if(choices[i] == 7) R = R + 3;
            }
            if(choices[i] < 4){
                if(choices[i] == 3) T = T + 1;
                if(choices[i] == 2) T = T + 2;
                if(choices[i] == 1) T = T + 3;
            }
        }
        if(survey[i][0] == 'C'){
            if(choices[i] > 4){
                if(choices[i] == 5) F = F + 1;
                if(choices[i] == 6) F = F + 2;
                if(choices[i] == 7) F = F + 3;
            }
            if(choices[i] < 4){
                if(choices[i] == 3) C = C + 1;
                if(choices[i] == 2) C = C + 2;
                if(choices[i] == 1) C = C + 3;
            }
        }
        if(survey[i][0] == 'F'){
            if(choices[i] > 4){
                if(choices[i] == 5) C = C + 1;
                if(choices[i] == 6) C = C + 2;
                if(choices[i] == 7) C = C + 3;
            }
            if(choices[i] < 4){
                if(choices[i] == 3) F = F + 1;
                if(choices[i] == 2) F = F + 2;
                if(choices[i] == 1) F = F + 3;
            }
        }
        if(survey[i][0] == 'J'){
            if(choices[i] > 4){
                if(choices[i] == 5) M = M + 1;
                if(choices[i] == 6) M = M + 2;
                if(choices[i] == 7) M = M + 3;
            }
            if(choices[i] < 4){
                if(choices[i] == 3) J = J + 1;
                if(choices[i] == 2) J = J + 2;
                if(choices[i] == 1) J = J + 3;
            }
        }
        if(survey[i][0] == 'M'){
            if(choices[i] > 4){
                if(choices[i] == 5) J = J + 1;
                if(choices[i] == 6) J = J + 2;
                if(choices[i] == 7) J = J + 3;
            }
            if(choices[i] < 4){
                if(choices[i] == 3) M = M + 1;
                if(choices[i] == 2) M = M + 2;
                if(choices[i] == 1) M = M + 3;
            }
        }
        if(survey[i][0] == 'A'){
            if(choices[i] > 4){
                if(choices[i] == 5) N = N + 1;
                if(choices[i] == 6) N = N + 2;
                if(choices[i] == 7) N = N + 3;
            }
            if(choices[i] < 4){
                if(choices[i] == 3) A = A + 1;
                if(choices[i] == 2) A = A + 2;
                if(choices[i] == 1) A = A + 3;
            }
        }
        if(survey[i][0] == 'N'){
            if(choices[i] > 4){
                if(choices[i] == 5) A = A + 1;
                if(choices[i] == 6) A = A + 2;
                if(choices[i] == 7) A = A + 3;
            }
            if(choices[i] < 4){
                if(choices[i] == 3) N = N + 1;
                if(choices[i] == 2) N = N + 2;
                if(choices[i] == 1) N = N + 3;
            }
        }
    }
    //console.log(R, T, C, F, J, M, A, N)
    
    let answer = [];
    if(R > T) answer.push("R");
    if(R == T) answer.push("R");
    if(R < T) answer.push("T");
    if(C > F) answer.push("C");
    if(C == F) answer.push("C");
    if(C < F) answer.push("F");
    if(J > M) answer.push("J");
    if(J == M) answer.push("J");
    if(J < M) answer.push("M"); 
    if(A > N) answer.push("A");
    if(A == N) answer.push("A");
    if(A < N) answer.push("N");
    
    return answer.join("");
}
