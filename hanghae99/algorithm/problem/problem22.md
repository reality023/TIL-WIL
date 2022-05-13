// 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931

```js
function solution(n)
{
    return String(n).split('').reduce((a, b) => a + parseInt(b), 0);
}
```

```js
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
```