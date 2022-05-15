# Q28. 하샤드 수
- https://programmers.co.kr/learn/courses/30/lessons/12947

> 내 코드
```js
function solution(x) {
    let sum = 0;
    let cp_x = x;

    while (cp_x) {
        sum += cp_x % 10;
        cp_x = Math.floor(cp_x / 10);
    }

    return !(x % sum);
}
```