# Q46. 나머지가 1이 되는 수
- https://programmers.co.kr/learn/courses/30/lessons/87389

> 내 코드
```js
function solution(n) {
    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
}
```