exports.min = function min (array) {
  if (array && array.length) {
    array.sort(function(a,b) {return a-b;});
    return array[0];
  }
  return 0;
}
exports.max = function max (array) {
  if (array && array.length) {
    array.sort(function(a,b) {return b-a;});
    return array[0];
  }
  return 0;
}
exports.avg = function avg (array) {
  if (array && array.length) {
  let summa = array.reduce((sum, current)=>sum+current, 0);
    return summa/array.length;
  }
  return 0;
}
