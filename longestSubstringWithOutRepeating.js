var lengthOfLongestSubstring = function(s) {
    var tmp = {},
        currentMaxRange = 0,
        lastRepIndex = 0,
        len = s.length,
        i;
    for(i = 0; i < len; i += 1) {
        var currentChar = s[i];
        if(typeof tmp[currentChar] !== 'undefined') {
            currentMaxRange = Math.max(currentMaxRange, i - lastRepIndex);
            lastRepIndex = Math.max(tmp[currentChar], lastRepIndex);
        } 
        tmp[currentChar] = i + 1;
        
    }
    return Math.max(currentMaxRange, i - lastRepIndex);
};
