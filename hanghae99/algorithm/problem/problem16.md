# Q16. 문자열 내 p와 y의 개수
- https://programmers.co.kr/learn/courses/30/lessons/12916

> 내 코드
```js
function solution(s){
    // 모두 소문자로 바꾸고 배열로 바꾼 뒤, p일경우 카운트를 올리고 y일 경우 카운트를 내린다. 결과가 0일 경우 같은 개수이므로 true, 아니면 false
    return !s.toLowerCase().split("").reduce((count, text) => text === "p" ? count + 1 : text === "y" ? count - 1 : count, 0);
}
```

> 다른 사람 코드
```js
function numPY(s){
    // s를 문자 "P"와 "Y"를 기준으로 문자를 자르고, 배열의 길이가 서로 같을 경우 true, 아닐경우 false
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
```

> 다른 사람 코드 2
```js
function numPY(s) {
    // 정규표현식으로 'p'와 'y'만 걸러내고, 길이가 같은지 체크
  return s.match(/p/ig).length == s.match(/y/ig).length;
}
```