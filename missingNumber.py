class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        print(n)
        missing = n

        for i in range(n):
            missing ^= i ^ nums[i]
            print(missing)

        return missing
