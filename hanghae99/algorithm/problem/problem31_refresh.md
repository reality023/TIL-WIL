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