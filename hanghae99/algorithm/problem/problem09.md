# 항해99 알고리즘
## 문제 9번 / 핸드폰 번호 가리기
- https://programmers.co.kr/learn/courses/30/lessons/12948

> 내가 푼 코드
```js
function solution(pn) {
    return "*".repeat(pn.length-4) + pn.substr(-4); // substr으로 뒤에서 4글자 추출하고 앞에는 문자 길이만큼 *을 배치
}

console.log(solution("01033334444"));
```

> 다른 사람 코드
```js
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*"); // 정규표현식으로 해당되는 부분만 *을 출력
}
```