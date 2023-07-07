class Solution:
    def reverse(self, x: int) -> int:

        
        negative = False
        if x < 0:
            negative = True
            x = abs(x)

    
        result = 0

    
        while x > 0:
            remainder = x % 10
            result = result * 10 + remainder
            x = x // 10

        
        if negative:
            result = -result

        if result < -2**31 or result > 2**31 - 1:
            return 0

        return result
