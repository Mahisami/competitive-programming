
var sortSentence = function(s) {
var word=s.split(" ");
var x=[];

for (let i=0; i<word.length; i++){
    const y=word[i].slice(-1)-1;
    x[y]=word[i].slice(0,-1);
}
return x.join(" ");

};
