def solution(nums):
    num_len = len(nums)
    sorted_list = list(set(nums))
    if num_len / 2 >= len(sorted_list):
        answer = len(sorted_list)
    else:
        answer = num_len // 2;

    return answer