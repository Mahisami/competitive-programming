class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        output = 0
        left = 0
        minLen = float('inf')
        for right in range(len(nums)):
            output += nums[right]
            while output >= target:
                minLen = min(minLen,right-left+1)
                output -= nums[left]
                left += 1
        return minLen if minLen!= float('inf') else  0

       

      
