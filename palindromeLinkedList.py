# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:

        
        self.next = next
        straight = ''
        reversed = ''
        while head:
            straight += str(head.val)
            reversed = str(head.val) + reversed
            head = head.next
        return straight == reversed
