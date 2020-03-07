
exports.min = function min (array) {
  if (array==undefined || array.length==0) {
    return 0;
  } else {
    array=array.reduce((min, elem) => {
      if (elem < min) {
        return min=elem;
      } else {
        return min;
      }
    }, array[0])
    return array;
  } 
}

exports.max = function max (array) {
  if (array==undefined || array.length==0) {
    return 0;
  } else {
    array=array.reduce((max, elem) => {
      if (elem > max) {
        return max=elem;
      } else {
        return max;
      }
    }, array[0])
    return array;
  } 
}

exports.avg = function avg (array) {
  if (array==undefined || array.length==0) {
    return 0;
  } else {
    let arrLength=array.length;
    array=array.reduce((avg, elem, i, arr) => {
      return avg+elem;
    })
    return array/arrLength;
  }
}
