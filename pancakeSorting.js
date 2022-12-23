var pancakeSort = function (arr) {
  var max = arr.length;
  var res = [];

  while (max > 1) {
    var idx = arr.indexOf(max) + 1;
    if (idx == max) {
    } else {
      res.push(idx, max);
      rev(idx);
      rev(max);
    }
    max--;
  }

  function rev(i) {
    var arr1 = arr.slice(0, i).reverse();
    var arr2 = arr.slice(i);
    arr = [...arr1, ...arr2];
  }

  return res;
};
