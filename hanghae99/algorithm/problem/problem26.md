# 제일 작은수 제거하기
- https://programmers.co.kr/learn/courses/30/lessons/12935

> 내 코드
```js
function solution(arr) {
    let list = arr.filter((v) => v !== Math.min(...arr))
    return list.length ? list : [-1];
}
```

> 내 코드 2
```js
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr.length ? arr : [-1];
}
```

> 다른 사람 코드
```js
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
```