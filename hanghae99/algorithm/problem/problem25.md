# Q25. 정수 제곱근 판별
- https://programmers.co.kr/learn/courses/30/lessons/12934

> 내 코드
```js
function solution(n) {
    const x = Math.sqrt(n);
    return x % 1 ? -1 : Math.pow(x+1, 2);
}
```