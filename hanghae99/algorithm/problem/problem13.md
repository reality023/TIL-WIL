# Q13. 2016년
- https://programmers.co.kr/learn/courses/30/lessons/12901

> 내가 쓴 코드
```js
function solution(a, b) {
    // toString()은 문자열로 변환
    // slice를 통해 요일 부분만 뽑기
    // toUpperCase를 통해 
    return (new Date(`2016-${a}-${b}`)).toString().slice(0, 3).toUpperCase();
}
```

> 다른 사람 코드
```js
function getDayName(a,b) {
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}
```