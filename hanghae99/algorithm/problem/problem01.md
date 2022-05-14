# Q1. 직사각형 별 찍기
- https://programmers.co.kr/learn/courses/30/lessons/12969

> 내가 푼 코드
```js
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    // repeat 함수
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let star = "";

    for (let i = 0; i < b; i++) { // b의 개수 만큼 반복
        for (let j = 0; j < a; j++) {
            star += "*"; // a의 개수 만큼 반복
        }

        console.log(star); // 줄 개행
        star = "";
    }
});
```

> 다른 사람 코드
```js
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a) // 문자열을 5회 입력해주는 함수
    for(let i =0; i < b; i++){ // 줄 수만큼 반복
        console.log(row); // 출력
    }
});
```