class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        z = x[::-1]
        if z == x:
            return True
        else:
            return False

        