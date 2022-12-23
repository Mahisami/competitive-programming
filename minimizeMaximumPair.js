/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = nums => {
    nums.sort((a,b) => a - b);
    let maxSum = 0;
    const middle = nums.length/2;
    
    for (let i = 0; i < middle; i++) {
        maxSum = Math.max(maxSum, nums[i] + nums[nums.length - i - 1])
    }
    
    return maxSum;
};
