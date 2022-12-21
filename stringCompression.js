var compress = function(chars) {
    let times = 1
    for(let i=1;i<=chars.length;i++) {
        if(chars[i-1]==chars[i]) {
            while(chars[i-1]==chars[i]) {
                chars.splice(i-1,1)
                times++
            }
            let str = String(times)
            String(times).split('').reverse().forEach(e=>{
                chars.splice(i,0, e)
            })
            i++
            times=1
        }
    }
};
