/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let count = K;
    let maxLength = 0;
    let l = 0;
    let i = 0;
    
    while (i < A.length) {
        const c = A[i];
        
        if (c) {
            i++;
        } else {
            if (count) {
                count--;
                A[i] = 2;
                i++;
            } else {
                if (count < K && A[l] === 2) {
                    count++;
                    A[l] = 0;
                }
                l++;
                if (l >= i) {
                    count = K;
                    i = l;
                }
            }
        }
        
        maxLength = Math.max(maxLength, i - l);
    }
    
    return maxLength;
};
