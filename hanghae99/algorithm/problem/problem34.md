# Q34. 모의고사
- https://programmers.co.kr/learn/courses/30/lessons/42840

> 내 코드
```js
function solution(answers) {
    const human = (pattern) => {
        return {
            isOk: 0,
            pattern
        }
    }
    const list = [human([1,2,3,4,5]), human([2,1,2,3,2,4,2,5]), human([3,3,1,1,2,2,4,4,5,5])]

    answers.forEach((x, i) => {
        list.forEach((y) => {
            if (x === y.pattern[i % y.pattern.length]) {
                y.isOk++;
            }
        });
    });

    const okayList = [list[0].isOk, list[1].isOk, list[2].isOk];
    const max = Math.max(...okayList);
    const maxList = okayList.map((v, i) => {
        return v === max ? i+1 : 0;
    });

    return maxList.filter((v) => v !== 0);
}
```


> 다른 사람 코드
```js
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}
```