// 7번 문제
// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    return absolutes.reduce((a, b, i) => a + (signs[i] ? b : -b), 0);
}

console.log(solution([1, 2, 3], [false, false, true]));
