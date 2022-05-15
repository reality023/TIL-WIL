# Q39. 시저 암호
- https://programmers.co.kr/learn/courses/30/lessons/12926

> 내 코드
```js
function solution(s, n) {
    return s.split("").map((v) => {
        if (v === " ") {
            return " ";
        }

        let value = v.charCodeAt() + n;
        if ((v === v.toUpperCase() && value > 90) || value > 122) {
            // 대문자인 경우 아스키 코드가 90번을 넘어 가거나 소문자인 경우 아스키 코드가 122를 넘어가면 26을 빼줍니다.
            value = value - 26;
        }

        return String.fromCharCode(value)
    }).join("");
}
```