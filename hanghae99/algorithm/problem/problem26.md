// 제일 작은수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935

필터 방식
```js
function solution(arr) {
    let list = arr.filter((v) => v !== Math.min(...arr))
    return list.length ? list : [-1];
}
```

자르기 방식
```js
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr.length ? arr : [-1];
}
```
