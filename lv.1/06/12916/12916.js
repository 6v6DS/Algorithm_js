function solution(s){
    let countp = s.match(/p/ig)?.length;
    let county = s.match(/y/ig)?.length;

    return countp  == county ? true : false;
}
console.log(solution("PPPPPYYYYY"))