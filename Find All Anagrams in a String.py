class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        xx = {}
        for i in p:
            xx[i] = xx.get(i, 0) + 1

        left = 0
        output = []
        xxx = {}

        for i in range(len(s)):
            xxx[s[i]] = xxx.get(s[i], 0) + 1
            if i - left + 1 > len(p):
                if xxx[s[left]] == 1:
                    del xxx[s[left]]
                else:
                    xxx[s[left]] -= 1
                left += 1

            if i - left + 1 == len(p) and self.are_anagrams(xxx, xx):
                output.append(left)

        return output

    def are_anagrams(self, dict1, dict2):
         return dict1 == dict2
