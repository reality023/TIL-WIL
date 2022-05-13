# 항해99 알고리즘
## 문제 8번 / 평균 구하기
- https://programmers.co.kr/learn/courses/30/lessons/12944

> 내가 푼 코드
```js
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length; // 그냥 다 합해서 더함
}
```

> 다른 사람 코드
```js
function average(array) {
    return array.reduce((a, b) => a + b) / array.length; // 동일 코드
}
```