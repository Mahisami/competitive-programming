
function nextGreaterElement(nums1, nums2) {
    let result = [];
    for(let num of nums1){
        let next = nums2.indexOf(num)+1;
        let nextGreater = -1;
        while(next < nums2.length){
            if( num < nums2[next]){
                nextGreater = nums2[next];
                break;
            }
            next++;
        }
        result.push(nextGreater);
    }
    return result;
};
