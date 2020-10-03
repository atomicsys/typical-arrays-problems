
exports.min = function min (array) {
  if (typeof array === "undefined" || array === undefined || array === [] || array.length === 0) {
    return 0;
  } else {
    let result = array[0];
    array.forEach(num => {
      if (result > num) {
        result = num;
      }
    });
    return result;
  }
}

exports.max = function max (array) {
  if (typeof array === "undefined" || array === undefined || array === [] || array.length === 0) {
    return 0;
  } else {
    let result = array[0];
    array.forEach(num => {
      if (result < num) {
        result = num;
      }
    });
    return result;
  }
}

exports.avg = function avg (array) {
  if (typeof array === "undefined" || array === undefined || array === [] || array.length === 0) {
    return 0;
  } else {
    // let result = array[0];
    let sum = 0;
    let delim = 1;
    array.forEach(num => {
      sum += num;
      result = sum / delim;
      delim++;
    });
    return result;
  }
}
