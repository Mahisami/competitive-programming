class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowel = {'a' , 'e' , 'i' , 'o' , 'u'}
        count = 0
        for i in range(k):
            count += int(s[i] in vowel)
            countt = count
        print(count)
        
        for i in range(k, len(s)):
            count += int(s[i] in vowel)
            count -= int(s[i-k] in vowel)
            counttt = max(count , countt)
        return counttt
            
       
