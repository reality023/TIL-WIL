# 항해99 알고리즘
## 문제 3번 / 가운데 글자 가져오기
- https://programmers.co.kr/learn/courses/30/lessons/12903

> 내가 푼 코드
```js
function solution(s) {
    let s_center = Math.floor(s.length / 2); // 반을 나눠서 floor로 소수점을 없애기
    let answer = '';
    if (s.length % 2 === 0) { // 반땅해서 0이 되면 문자 개수가 짝수이므로 두문자
        answer = s[s_center-1] + s[s_center];
    } else { // 문자 개수가 홀수이면 한문자
        answer = s[s_center];
    }
    return answer;
}
```

> 다른 사람 코드
```js
function solution(s) {
    // substr은 문자열 추출, ceil을 통해 절반에 있는 문자 위치에 올림을 하고 -1 위치부터 짝수개 혹은 홀수개에 따라 2글자 또는 1글자 추출
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
```