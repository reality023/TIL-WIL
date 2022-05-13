// 3번 문제
// 가운데 글자 가져오기

function solution(s) {
    let s_center = Math.floor(s.length / 2);
    let answer = '';
    if (s.length % 2 === 0) {
        answer = s[s_center-1] + s[s_center];
    } else {
        answer = s[s_center];
    }
    return answer;
}