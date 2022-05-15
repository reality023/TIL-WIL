# Q35. 문자열 정렬하기
- https://programmers.co.kr/learn/courses/30/lessons/12915

> 내 코드
```js
function solution(strings, n) {
    const list = {
    }
    strings.forEach((v) => {
        if (list[v[n]] === undefined) {
            list[v[n]] = []
        }
        list[v[n]].push(v)
    })
    
    return Object.keys(list).sort().reduce((Obj, key) => {
        Obj.push(...list[key].sort())
        return Obj;
    }, []);
}
```