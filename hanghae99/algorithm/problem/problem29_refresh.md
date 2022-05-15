def solution(n):
    answer = 0
    index = []
    while True:
        less = n % 3
        index.append(less)
        n = int(n / 3)
        if n == 0:
            break

    index.reverse()
    check = 1
    for i in index:
      answer += check * i
      check *= 3
    return answer

print(solution(45))
