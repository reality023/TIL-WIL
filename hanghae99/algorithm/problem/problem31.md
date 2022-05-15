# Q31. 같은 숫자는 싫어
- https://programmers.co.kr/learn/courses/30/lessons/12906

> 내 코드
```js
function solution(arr)
{
    return arr.filter((v, i) => {
        if (i > 0) {
            if (v === arr[i-1]) {
                return false;
            }
        }
        return true;
    });
}
```