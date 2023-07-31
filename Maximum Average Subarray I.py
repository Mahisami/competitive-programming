class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
      
        maxSum = sum(nums[:k]) 
        ans = maxSum

        for i in range(k, len(nums)):
            maxSum += nums[i] - nums[i-k]
            ans = max(ans,maxSum)
        return ans/k
                
            
