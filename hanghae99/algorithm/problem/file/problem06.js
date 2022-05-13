// 06번 문제
// 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    let list = [0,1,2,3,4,5,6,7,8,9];
    const reducer = (a, b) => a + b;
    
    numbers.forEach((v) => {
        list.splice(list.indexOf(v), 1);
    });

    return list.reduce(reducer);
}

console.log(solution([1,2,3,4,6,7,8,0]));
