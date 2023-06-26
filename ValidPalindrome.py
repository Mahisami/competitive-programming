class Solution:
    def isPalindrome(self, s: str) -> bool:
        output = ""
        s = s.lower()
        for i in s:
            if i.isalnum():
                output += i
            
        return output == output[::-1]
