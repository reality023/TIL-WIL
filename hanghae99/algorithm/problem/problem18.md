# Q18. 서울에서 김서방 찾기
- https://programmers.co.kr/learn/courses/30/lessons/12919

> 내 코드 1
```js
function solution(seoul) {
    return `김서방은 ${seoul.findIndex(v => v === "Kim")}에 있다`;
}
```

> 내 코드 2
```js
function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
```

> 다른 사람 코드
```js
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}
```