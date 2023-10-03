"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def maxDepth(self, root: 'Node') -> int:
        # if not root:
        #     return 0
        # return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
        level = 0
        p = deque([root])
        while p:
            if not root:
                return 0
            for i in range(len(p)):
                node = p.popleft()
                for child in node.children:
                    p.append(child)
            level += 1
        return level
                    

                 


