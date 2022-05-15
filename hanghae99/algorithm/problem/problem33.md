# Q33. 로또의 최고 순위와 최저 순위
- https://programmers.co.kr/learn/courses/30/lessons/77484

> 내 코드
```js
function solution(lottos, win) {
    const rank = [6,6,5,4,3,2,1]
    let countZero = lottos.filter((v) => v === 0).length;
    let count = 0;
    win.forEach((v) => {
        if (lottos.includes(v)) {
            count++;
        }
    })
    return [rank[count+countZero], rank[count]];
}
```