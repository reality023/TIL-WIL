# Q20. 완주하지 못한 선수
- https://programmers.co.kr/learn/courses/30/lessons/42576

> 내 코드
```js
function solution(part, comp) {
    part.sort();
    comp.sort();
    for (let i = 0; i < b.length; i++) {
        if (a[i] !== b[i]) {
            return a[i];
        }
    }
    return a[a.length-1];
}
```

> 다른 사람 코드
```js
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
```