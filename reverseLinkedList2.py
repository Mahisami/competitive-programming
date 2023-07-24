class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if not head or left == right:
            return head

        prev = None
        current = head
        position = 1

        while position < left:
            prev = current
            current = current.next
            position += 1

        start = current

        prev_node = None
        while position <= right:
            next_node = current.next
            current.next = prev_node
            prev_node = current
            current = next_node
            position += 1

        start.next = current

        if prev:
            prev.next = prev_node
        else:
            head = prev_node 

        return head
