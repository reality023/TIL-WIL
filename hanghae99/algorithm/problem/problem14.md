# 항해99 알고리즘
## 문제 14번 / 나누어 떨어지는 숫자 배열
- https://programmers.co.kr/learn/courses/30/lessons/12910

> 내가 푼 코드
```js
function solution(arr, divisor) {
    const list = arr.filter((v) => v % divisor === 0); // 나눠서 나머지가 0인것들만 필터링함
    return list.length === 0 ? [-1] : list.sort((a, b) => a - b); // 길이가 0인것들은 [-1] 배열 리턴해주고 아닌경우 정렬
}
```

> 다른 사람 코드
```js
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
```