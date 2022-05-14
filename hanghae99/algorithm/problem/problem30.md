# Q30. 최소직사각형
- https://programmers.co.kr/learn/courses/30/lessons/86491

> 내 코드
```js
function solution(sizes) {
    const [a, b] = sizes.map((v) => v[0] > v[1] ? [v[0], v[1]] : [v[1], v[0]]).reduce((a, b) => [a[0] > b[0] ? a[0] : b[0], a[1] > b[1] ? a[1] : b[1]])
    return a * b;
}
```

> 내 코드 2
```js
function solution(sizes) {
    const [x, y] = sizes.reduce((a, b) => {
        const a_min = Math.min(...a);
        const b_min = Math.min(...b);
        const a_max = Math.max(...a);
        const b_max = Math.max(...b);
        return [ a_min > b_min ? a_min : b_min, a_max > b_max ? a_max : b_max]
    });

    return x * y;
}
```

> 다른 사람 코드
```js
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}
```