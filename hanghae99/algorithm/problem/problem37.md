# Q37. 소수 만들기
- https://programmers.co.kr/learn/courses/30/lessons/12977

> 내 코드
```js 
function solution (nums) {
    const list = [];
    nums.forEach((x) => {
        const nums2 = nums.filter((v) => v !== x);
        nums2.forEach((y) => {
            const nums3 = nums2.filter((v) => v !== y);
            nums3.forEach((z) => {
                const str = [x,y,z].sort((a, b) => a - b).join();
                if (!list.includes(str)) {
                    list.push(str);
                }
            });
        });
    });

    return list.map((v) => v.split(",").reduce((r, v) => r + parseInt(v), 0)).filter(
        (v) => {
            for (let i = 2; i*i <= v; i++) {
                if (v % i === 0) return false;
            }
            return true;
        }
    ).length;
}
```
