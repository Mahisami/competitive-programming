class Solution:
    def findSmallestSetOfVertices(self, n, edges):
       
        in_degrees = [0] * n
       
        graph = defaultdict(list)
        
        for edge in edges:
            from_node, to_node = edge
            in_degrees[to_node] += 1
            graph[from_node].append(to_node)
        
        result = []
        
        for i in range(n):
            if in_degrees[i] == 0:
                result.append(i)
        
        return result
