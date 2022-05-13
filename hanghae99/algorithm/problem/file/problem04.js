// 4번 문제
// 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    var answer = 0;

    if (a <= b) {
        for (let i = a; i < b+1; i++) {
            answer += i;
        }
    } else {
        for (let i = b; i < a+1; i++) {
            answer += i;
        }
    }

    return answer;
}