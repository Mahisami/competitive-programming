class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        xx = set()
        left = 0
        maxLen = 0

        for i in range(len(s)):
            if s[i] not in xx:
                xx.add(s[i])
                maxLen = max(maxLen, i-left+1)
            else:
                while(s[i]!=s[left]):
                    xx.remove(s[left])
                    left+=1
                left+=1


        return maxLen

        
