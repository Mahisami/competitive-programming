/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    const arr = [];
    
    for (let i = 0; i < nums.length; i++) {
        const firstSlice = nums.slice(i, firstLen + i);
        const secondSlice = nums.slice(i, secondLen + i);
        const firstSum = firstSlice.reduce((result, acm) => result + acm);
        const secondSum = secondSlice.reduce((result, acm) => result + acm);
        
        arr.push({
            firstSum,
            secondSum,
            index: i
        })
    }
    
    arr.sort((a, b) => b.firstSum - a.firstSum);
    
    const arr2 = [];
    
    for (let i = 0; i < arr.length; i++) {
        const obj1 = arr[i];
        
        let maxSecondSum = -1;
        
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue;
            
            const obj2 = arr[j];
            const cond1 = obj1.index >= obj2.index && obj1.index <= obj2.index + secondLen - 1;
            const cond2 = obj1.index + firstLen - 1 >= obj2.index && obj1.index + firstLen - 1 <= obj2.index + secondLen - 1;
            const cond3 = obj2.index >= obj1.index && obj2.index <= obj1.index + firstLen - 1;
            const cond4 = obj2.index + secondLen - 1 >= obj1.index && obj2.index + secondLen - 1 <= obj1.index + firstLen - 1;
            
            if (cond1 || cond2 || cond3 || cond4) continue;
            
            if (maxSecondSum < obj2.secondSum) {
                maxSecondSum = obj2.secondSum;
            }
        }

        arr2.push({
            firstSum: obj1.firstSum,
            secondSum: maxSecondSum
        });
    }
    
    
    let firstMax = -1;
    let secondMax = -1;
    
    for (let i = 0; i < arr2.length; i++) {
        const obj = arr2[i];
        
        if (firstMax + secondMax < obj.firstSum + obj.secondSum) {
            firstMax = obj.firstSum;
            secondMax = obj.secondSum;
        }
    }
    
    return firstMax + secondMax;
};
