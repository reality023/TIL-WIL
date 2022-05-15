def solution(numbers):
    answer = []
    for i in range(0, len(numbers)-1):
        for j in range(1, len(numbers)):
            if i == j:
              continue
            answer.append(numbers[i] + numbers[j])
            
    answer=list(set(answer))
    answer.sort()
            
        
    return answer
