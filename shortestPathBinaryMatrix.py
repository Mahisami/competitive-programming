class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:

        if not grid or grid[0][0] == 1 or grid[-1][-1] == 1:
            return -1

        n = len(grid)
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (-1, -1), (1, -1), (-1, 1)]

        queue = deque([(0, 0, 1)])

        while queue:
            x, y, steps = queue.popleft()

            if x == n - 1 and y == n - 1:
                return steps

            for dx, dy in directions:
                nx, ny = x + dx, y + dy

                if 0 <= nx < n and 0 <= ny < n and grid[nx][ny] == 0:
                    queue.append((nx, ny, steps + 1))
                    grid[nx][ny] = 1  # Mark as visited

        return -1
