var maxOperations = function(nums, k, obj={}, res=0) {
    for(let q=0;q<nums.length;q++){
        if(k-nums[q] && obj[k-nums[q]] > 0){
            res++
            obj[k-nums[q]]--
        }else obj[nums[q]]=++obj[nums[q]] || 1
    }
    return res
};
