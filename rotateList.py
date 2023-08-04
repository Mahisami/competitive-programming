class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0:
            return head
        length = 1
        node = head
        while node.next:
            length += 1
            node = node.next
        output = length - (k % length)

        if output == length:  
            return head

        node.next = head

        node = head
        for _ in range(output - 1):
            node = node.next

        new_head = node.next
        node.next = None

        return new_head
