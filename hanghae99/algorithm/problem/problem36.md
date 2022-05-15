# Q36. 문자열 내림차순으로 배치하기
- https://programmers.co.kr/learn/courses/30/lessons/12917

> 내 코드
```js
function solution(s) {
    list = s.split("").sort().reduce((arr, value) => {
        if (value === value.toUpperCase()) {
            arr[1] += value;
        } else {
            arr[0] += value;
        }
        return arr;
    }, ["",""])
    return list[0].split("").reverse().join("") + list[1].split("").reverse().join("");
}
```