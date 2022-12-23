var maxCoins = function(piles) {
    // sort in descending order
    piles.sort((a, b) => b - a);
    
    let ans = 0,
	    index = 1, // start from second index
		endIndex= 2 * piles.length / 3;
    while (index  < endIndex) {
        ans += piles[index];
        index += 2;
    }
    return ans;
};
