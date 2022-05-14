# Q34. 모의고사
- https://programmers.co.kr/learn/courses/30/lessons/42840

> 내 코드
```js
function solution(s) {
    const x = /[^0-9]/ // 정규 표현식으로 전부 숫자가 아닐때까지 체크하기 위함
    const change = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    while (x.test(s)) { // 테스트를 통해 전부 숫자가 아닌동안 반복
        s = change.reduce((result, x, i) => result.replace(x, i), s); // reduce를 통해 change를 한 사이클
    }
    return parseInt(s);
}
```

> 다른 사람 코드
```js
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i); // 조인이 뭔지 알아봐야 게따
    }

    return Number(answer);
}
```