# Q11. x만큼 간격이 있는 n개의 숫자
- https://programmers.co.kr/learn/courses/30/lessons/12954

> 내가 푼 코드
```js
function solution(x, n) {
    let list = [];
    for (let i = 0; i < n; i++) {
        list.push(x * (i+1));
    }
    return list;
}
```

> 다른 사람 코드
```js
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
```