# Q6. 없는 숫자 더하기
- https://programmers.co.kr/learn/courses/30/lessons/86051

> 내가 푼 코드
```js
function solution(numbers) {
    let list = [0,1,2,3,4,5,6,7,8,9]; // 배열에 모든 값을 리스트업 하고
    
    numbers.forEach((v) => { // 제외해야 할 배열 값을 반복을 돌린다
        list.splice(list.indexOf(v), 1); // 모든 값 중에서 제외해야 할 값을 제거한다
    });

    return list.reduce((a, b) => a + b); // 리듀스를 통해서 남은 값들을 모두 합한다
}
```

> 다른 사람 코드
```js
function solution(numbers) {
    // 1부터 9까지 모든 값을 더한 값에서 제외해야할 값들을 모두 더한 값을 뺀다
    return 45 - numbers.reduce((cur, acc) => cur + acc);
}
```