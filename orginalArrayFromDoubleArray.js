var findOriginalArray = function(changed) {
    let n = changed.length;
    if(n % 2 === 1) return [];
    
    changed.sort((a, b) => a - b);
    
    let result = [];
    let map = new Map();
    
    for(let num of changed){
        
        let half = num / 2;
        
        if(map.has(half)){
            result.push(half);
            map.set(half, map.get(half) - 1);
            if(map.get(half) === 0) map.delete(half);
        }else{
            if(!map.has(num)) map.set(num, 0);
            map.set(num, map.get(num) + 1);
        }
    }
    
    return map.size ? [] : result;
};
