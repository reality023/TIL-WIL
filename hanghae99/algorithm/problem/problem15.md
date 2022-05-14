# Q15. 내적
- https://programmers.co.kr/learn/courses/30/lessons/70128

> 내 코드
```js
function solution(a, b) {
    return a.reduce((x, y, i) => x + y*b[i], 0); // 리듀스를 통해 배열 a의 값과 b의 값을 합침
}
```

> 다른 사람 코드
```js
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0); // 코드를 더 직관적으로 짬
}
```