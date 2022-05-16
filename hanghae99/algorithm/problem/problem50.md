# Q50. 폰켓몬
- https://programmers.co.kr/learn/courses/30/lessons/1845

> 내 코드
```js
function solution(nums) {
    const x = nums.length/2;
    const pocket = (new Set(nums)).size;
    return pocket < x ? pocket : x;
}
```