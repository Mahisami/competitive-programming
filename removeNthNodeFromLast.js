var removeNthFromEnd = function(head, n) {
    let tempList = new ListNode(0);
    tempList.next = head;
	
   
    let slow = tempList;
    let fast = tempList;
	
  
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
	
   
    slow.next = slow.next.next;
    return tempList.next;
}
