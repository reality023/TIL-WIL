# Q7. 음양 더하기
- https://programmers.co.kr/learn/courses/30/lessons/76501

> 내가 푼 코드
```js
function solution(absolutes, signs) {
    return absolutes.reduce((a, b, i) => a + (signs[i] ? b : -b), 0); // 리듀스를 사용해 값을 더하는데, signs의 배열값이 false인 경우 뺀다
}
```

> 다른 사람 코드
```js
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0); // 위랑 동일 코드
}
```