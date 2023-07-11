def maxCoins(piles):
    # sort in descending order
    piles.sort(reverse=True)

    ans = 0
    index = 1  # start from second index
    endIndex = 2 * len(piles) // 3
    while index < endIndex:
        ans += piles[index]
        index += 2
    return ans
