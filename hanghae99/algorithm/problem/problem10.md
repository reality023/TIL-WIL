# Q10. 행렬의 덧셈
- https://programmers.co.kr/learn/courses/30/lessons/12950

> 내가 푼 코드
```js
function solution(arr1, arr2) {
    let answer = [];
    let inner = [];
    arr1.forEach((x, i) => { // 중첩 반복문을 통해 n행 n열을 표현할 수 있게 함
        x.forEach((y, j) => {
            inner.push(y + arr2[i][j]); // arr1의 값과 동일한 위치의 arr2의 값을 가져와 더한 후 inner 배열에 삽입
        });
        answer.push(inner); // 행이 완성되면 answer 배열에 삽입
        inner = []; // 행을 비우고 다시 반복
    });
    return answer;
}
```

> 다른 사람 코드
```js
function sumMatrix(A,B){
    return A.map((a,i) => a.map((b, j) => b + B[i][j])); // 위 코드와 동일하지만 map함수를 활용해서 구현함
}
```

> 다른 사람 코드 분해
```js
function sum(arr1, arr2) {
    return arr1.map(
        function (a, i) { // 여기서 a는 arr1의 배열 개수만큼 반복되는 value 값
            return a.map(
                function (b, j) { // 여기서 b는 a가 가진 배열 개수만큼 반복되는 value 값
                    return b + arr2[i][j]; // 값 하나와 동일한 위치의 값인 경우 더해 리턴
                }
            )
        }
    );
}
```