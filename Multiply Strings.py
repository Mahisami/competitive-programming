class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        li = []
        for i in range(len(num1)):
            for j in range(len(num2)):
                li = int(num1) * int(num2)
        return str(li)
