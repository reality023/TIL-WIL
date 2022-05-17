# Q54. 크레인 인형뽑기 게임
- https://programmers.co.kr/learn/courses/30/lessons/64061

```js
function scan(stack) {
    let cost = 0;
    for (let i = 0; i < stack.length; i++) {
        if (i !== 0 && stack[i] === stack[i-1]) {
            stack.splice(i-1, 2);
            cost += 2;
            i -= 2;
        }
    }
    return cost;
}

function solution(board, moves) {
    const stack = [];
    const boardDepth = board.length;

    moves.forEach((x) => {
        for (let y = 0; y < boardDepth; y++) {
            const pick = board[y][x-1];
            if (pick > 0) {
                stack.push(pick);
                board[y][x-1] = 0;
                break;
            }
        }
    });

    return scan(stack);
}
```