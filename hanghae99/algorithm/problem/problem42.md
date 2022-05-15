# Q42. 약수의 합

```js
function solution(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        if (!(n % i)) {
            result += i;
        }
    }
    return result;
}
```

```js
function solution(n) { // 계산양을 줄이기 위해 짝을 더해줌
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){
        if (!(n%i)) {
            answer += (i+n/i);
        }
    }
    i--;
    return (i === n/i) ? answer-i : answer;
}
```