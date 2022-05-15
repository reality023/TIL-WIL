function solution(s) {
    list = s.split("").sort().reduce((arr, value) => {
        if (value === value.toUpperCase()) {
            arr[1] += value;
        } else {
            arr[0] += value;
        }
        return arr;
    }, ["",""])
    return list[0].split("").reverse().join("") + list[1].split("").reverse().join("");
}