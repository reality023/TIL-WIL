# Q21. 이상한 문자 만들기
- https://programmers.co.kr/learn/courses/30/lessons/12930

> 내 코드
```js
function solution(s) {
    return s.split(" ").map((v) => v.split("").map((w, i) => i % 2 === 0 ? w.toUpperCase() : w.toLowerCase()))
    .reduce((arr, v) => arr.concat(" ", v))
    .reduce((a, b) => a + b);
}
```

> 다른 사람 코드
```js
function toWeirdCase(s){
    //함수를 완성해주세요
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}
```