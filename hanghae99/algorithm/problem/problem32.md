# Q32. 두개 뽑아서 더하기
- https://programmers.co.kr/learn/courses/30/lessons/68644

> 내 코드
```js
function solution(numbers) {
    const list = [];
    numbers.forEach((x, i) => {
        numbers.forEach((y, j) => {
            const sum = x + y;
            if (!list.includes(sum) && i !== j) {
                list.push(sum);
            }
        })
    });

    return list.sort((a, b) => a - b);
}
```

> 다른 사람 코드
```js
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
```