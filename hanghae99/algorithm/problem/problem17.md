# Q17. 문자열 다루기 기본
- 

> 내 코드
```js
function solution(s) {
    let len = s.length;
    if (len === 4 || len === 6) {
        return !(/[^0-9]/).test(s)
    } else {
        return false;
    }
}
```

> 다른 사람 코드
```js
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/; // 정규 표현식도 길이 체크 된다구
  return regex.test(s);
}
```