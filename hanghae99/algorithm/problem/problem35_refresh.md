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