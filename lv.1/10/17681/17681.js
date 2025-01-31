function solution(n, arr1, arr2) {
    let bin1 = [];
    let bin2 = [];
    let result = [];
    for(let i = 0; i < n; i++){
        bin1.push(arr1[i].toString(2));
        bin2.push(arr2[i].toString(2));
        if(bin1[i].length < n){
            bin1[i] = "0".repeat(n - bin1[i].length) + bin1[i];
        }
        if(bin2[i].length < n){
            bin2[i] = "0".repeat(n - bin2[i].length) + bin2[i];
        }
    }
    for(let i = 0; i < n; i++){
        let ans = [];
        for(let j = 0; j < n; j++){
            if(bin1[i][j] == "1" || bin2[i][j] == "1"){
                ans.push('#')
            }
            if(bin1[i][j] == "0" && bin2[i][j] == "0"){
                ans.push(" ")
            }
        }
        result.push(ans.join(""))
    }
    return result;
}