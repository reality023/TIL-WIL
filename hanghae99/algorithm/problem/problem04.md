# 항해99 알고리즘
## 문제 4번 / 두 정수 사이의 합
- https://programmers.co.kr/learn/courses/30/lessons/12912

> 내가 푼 코드
```js
function solution(a, b) {
    var answer = 0;

    if (a <= b) {
        for (let i = a; i < b+1; i++) { // a가 b보다 작은 경우 a부터 b 까지 더하고
            answer += i;
        }
    } else {
        for (let i = b; i < a+1; i++) { // a가 b보다 큰 경우 b부터 a 까지 더한다
            answer += i;
        }
    }

    return answer;
}
```

> 다른 사람 코드
```js
function adder(a, b){
    var result = 0
    //함수를 완성하세요


    return (a+b)*(Math.abs(b-a)+1)/2; // 큰 수와 작은 수를 더하고 개수의 절반만큼 곱한다
}
```