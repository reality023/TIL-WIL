# 항해99 알고리즘
## 문제 2번 / 짝수와 홀수
- https://programmers.co.kr/learn/courses/30/lessons/12937

> 내가 푼 코드
```js
function solution(num) {
    let answer = '';
    if (num % 2 === 0) { // 2로 나눈 나머지가 0일경우 짝수이므로 Even
        answer = 'Even'; 
    } else { // 2로 나눈 나머지가 1일 경우 홀수이므로 Odd
        answer = 'Odd';
    }
    return answer;
}
```

> 다른 사람 코드
```js
function evenOrOdd(num) { // 이 코드는 3항 연산자를 사용했다. 코드 속도는 동일하므로 뭐든 상관없을듯
    return num % 2 ? "Odd" : "Even";
}
```