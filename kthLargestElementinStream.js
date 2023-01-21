var KthLargest = function(k, nums) {
    arr=nums.sort((a,b)=>b-a)
    n=k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let done = false
    for(let q=arr.length-1;q>=0;q--){
        if(val<arr[q]){
            arr.splice(q+1,0,val)
            done = true
            break
        }
    }
    if (!done)arr.splice(0,0,val)
    return arr[n-1]
};
