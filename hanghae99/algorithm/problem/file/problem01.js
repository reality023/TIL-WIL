// 1번 문제
// 직사각형 별찍기
// https://programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    // repeat 함수
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let star = "";

    for (let i = 0; i < b; i++) {
        for (let j = 0; j < a; j++) {
            star += "*";
        }

        console.log(star);
        star = "";
    }
});