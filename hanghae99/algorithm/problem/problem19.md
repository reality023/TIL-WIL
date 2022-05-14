# Q19. 수박수박수박수박수박수?
- https://programmers.co.kr/learn/courses/30/lessons/12922/solution_groups?language=javascript&type=all

> 내 코드
```js
function solution(n) {
    return "수박".repeat(Math.floor(n/2)) + (n%2 === 0 ? "":"수");
}
```

> 다른 사람 코드
```js
const waterMelon = n => "수박".repeat(n).slice(0,n);
```