# Q27. 콜라츠 추측
- https://programmers.co.kr/learn/courses/30/lessons/12943

> 내 코드
```js
function solution(num) {
    let count = 0;
    while(count < 500 && num !== 1) {
        if (num % 2) { // 홀
            num = (num*3) + 1;
        } else { // 짝
            num = num / 2;
        }
        count++;
    }
    return num === 1 ? count : -1;
}
```
