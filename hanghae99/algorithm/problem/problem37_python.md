


def solution(nums):
    check = 0
    list_nums = []
    for i in range(0, len(nums)):
      for j in range(i, len(nums)):
        for k in range(j, len(nums)):
          if (i == j or i == j or j == k):
            continue
          list_nums.append(nums[i]+nums[j]+nums[k])
    list(set(list_nums))
    print(list_nums)
    for i in list_nums:
      count = 0
      for j in range(1, i+1):
        if i%j== 0:
          count +=1
      if count == 2:
        check += 1
        
    return check