# Q40. 신규 아이디 추천
- https://programmers.co.kr/learn/courses/30/lessons/72410

> 내 코드
```js
function solution(id) {
    let str = id.toLowerCase(); // 1
    str = str.replace(/[^a-z0-9-_.]/g, ""); // 2
    str = str.replace(/[.]{2,}/g, "."); // 3
    str = str.replace(/^\.|\.$/g, ""); // 4

    if (str.length === 0) { // 5
        str = 'a';
    }

    if (str.length >= 16) { // 6
        str = str.substring(0, 15);
    }

    str = str.replace(/^\.|\.$/g, ""); // 6

    if (str.length <= 2) { // 7
        while (str.length < 3) {
            str += str[str.length-1]
        }
    }

    return str
}
```

> 다른 사람 코드
```js
const solution = (new_id) => {
    const id = new_id
        .toLowerCase() // 1
        .replace(/[^\w\d-_.]/g, '') // 2
        .replace(/\.{2,}/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .padEnd(1, 'a') // 5
        .slice(0, 15) // 6
        .replace(/^\.|\.$/g, '') // 6
    return id.padEnd(3, id[id.length-1]) // 7
}
```