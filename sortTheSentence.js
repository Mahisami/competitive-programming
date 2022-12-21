var sortSentence = function(s) {
  let sorted = [];
  for (let str of s.split(" ") ) {
    let index = str[str.length - 1] - 1;
    sorted[index] = str.slice(0, str.length - 1);
  }
  return sorted.join(" ");
};
