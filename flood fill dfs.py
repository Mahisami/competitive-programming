class Solution:
    def dfs(self, image, sr, sc, newColor, rows, cols, source):
        if sr < 0 or sr >= rows or sc < 0 or sc >= cols:
            return
        elif image[sr][sc] != source:
            return

        image[sr][sc] = newColor

        self.dfs(image, sr - 1, sc, newColor, rows, cols, source)  # TOP
        self.dfs(image, sr + 1, sc, newColor, rows, cols, source)  # DOWN
        self.dfs(image, sr, sc - 1, newColor, rows, cols, source)  # LEFT
        self.dfs(image, sr, sc + 1, newColor, rows, cols, source)  # RIGHT

    def floodFill(self, image, sr, sc, newColor):
        if newColor == image[sr][sc]:
            return image

        rows = len(image)
        cols = len(image[0])
        source = image[sr][sc]

        self.dfs(image, sr, sc, newColor, rows, cols, source)
        return image
