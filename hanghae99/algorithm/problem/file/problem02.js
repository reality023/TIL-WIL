// 2번 문제
// 짝수와 홀수
// https://programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
    let answer = '';
    if (num % 2 === 0) {
        answer = 'Even'; 
    } else {
        answer = 'Odd';
    }
    return answer;
}