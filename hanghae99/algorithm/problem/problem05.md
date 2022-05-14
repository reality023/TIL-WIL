# Q5. 문자열을 정수로 바꾸기
- https://programmers.co.kr/learn/courses/30/lessons/12925

> 내가 푼 코드
```js
function solution(s) {
    return parseInt(s); // 명시적 형변환을 통해 푼 방식
}
```

> 다른 사람 코드
```js
function strToInt(str){
    return str/1 // 묵시적 형변환을 이용해서 푼 방식
}
```