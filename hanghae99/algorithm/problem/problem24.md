# Q24. 내림차순으로 배치하기
- https://programmers.co.kr/learn/courses/30/lessons/12933

> 내 코드
```js
function solution(n) {
    const arr = [];
    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n > 0)
    return parseInt(arr.sort().reverse().join(""));
}
```

> 다른 사람 코드
```js
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}
```