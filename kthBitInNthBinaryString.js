
/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
const memo={}
const reverseBits = (bits) => {
    return bits.split('').reverse().join('');
}


const invert = (bits) => {
    x = bits.split('').map((bit)=>{
        if(bit==='1') return '0'
        else return '1'
    }).join('')
    return x
}

const getNthBinary = (n) => {
    if(n===1) return '0'
    if(memo[n]) return memo[n]
    else {
        memo[n]= getNthBinary(n-1) + '1' + reverseBits(invert(getNthBinary(n-1)))
        return memo[n]
    }
};

var findKthBit = function(n, k) {
    return getNthBinary(n).charAt(k-1);
};





    
    
