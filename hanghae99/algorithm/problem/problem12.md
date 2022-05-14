# Q12. 부족한 금액 계산하기
- https://programmers.co.kr/learn/courses/30/lessons/82612

> 내 코드
```js
function solution(price, money, count) {
    for (let i = 0; i < count; i++) {
        money -= price * (i+1);
    }

    return money >= 0 ? 0 : -money;
}
```

> 다른 코드
```js
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
```