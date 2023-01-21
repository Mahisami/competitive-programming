var removeKdigits = function(num, k) {
    let stack = [];
    
    for (let n of num) {
        while (k >= 1 && stack.length && stack[stack.length-1] > n) {
            stack.pop();
            k--;
        }
        
        stack.push(n);
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    while (stack[0] == "0") {
        stack.shift();
    }
    
    if (stack.length == 0) {
        stack.push("0");
    }
    
    return stack.join("");
};
