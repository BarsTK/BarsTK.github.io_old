'use strict';

function isArray1v(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

function isArray2v(arg) {
  return arg instanceof Array;
}
 
function isNumeric(arg) {
  return (arg !== undefined && arg !=='' && !isNaN(parseInt(arg)));
}

function range(lengthFrom, toNumb, stepNumb) {
  let arrResult = [];
  let from = 0;
  let to;
  let step = 1;

  if (isNumeric(lengthFrom)) {
    if (isNumeric(toNumb)) {
      from = +lengthFrom;
      to = +toNumb;
    } else {
      from = 0;
      to = lengthFrom;
    }
    if (isNumeric(stepNumb)) {
      step = +stepNumb;
    }
    while ((to > from && step > 0) || (to < from && step < 0)) {
      arrResult.push(from);
      from += step;
    }
  }
  return arrResult;
}

function compact(arr) {
  return arr.filter(function(elem) {
    return elem;
  });
}

function sum1v(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sum2v(arr) {
  return arr.reduce(function(acc, val) {
    return acc + val;
  });
}

function unique1v(arr) {
  let arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (arrResult.indexOf(arr[i]) !== -1) { //understands number and 'number'
      continue;
    }
    arrResult.push(arr[i]);
  }
  return arrResult;
}

function unique2v(arr) {
  return arr.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });
}

function last(arr) {
  return arr[arr.length - 1];
}

function excludeLast1v(arr, numbExcludeElems) {
  const LENGTH_ARRAY = arr.length;
  let arrResult = arr.slice();
  let excludeNumb = 1;
  let lastIndex = LENGTH_ARRAY - 1;

  if (isNumeric(numbExcludeElems) && numbExcludeElems >= 0) {
    excludeNumb = numbExcludeElems > LENGTH_ARRAY ? LENGTH_ARRAY : numbExcludeElems;;
  }
  for (let i = lastIndex; i > lastIndex - excludeNumb; i--) {
    arrResult.pop();
  }
  return arrResult;
}

function excludeLast2v(arr, numbExcludeElems) {
  const LENGTH_ARRAY = arr.length;
  let arrResult = arr.slice();
  let excludeNumb = 1;

  if (isNumeric(numbExcludeElems) && numbExcludeElems >= 0) {
    excludeNumb = numbExcludeElems > LENGTH_ARRAY ? LENGTH_ARRAY : numbExcludeElems;
  }
  arrResult.length = arr.length - excludeNumb;
  return arrResult;
}

function excludeLast3v(arr, numbExcludeElems) {
  const NUMB_ZERO = 0;
  let excludeNumb = 1;

  if (isNumeric(numbExcludeElems) && numbExcludeElems >= NUMB_ZERO) {
    excludeNumb = numbExcludeElems;
  }
  let endIndex = arr.length - excludeNumb;
  if (endIndex < NUMB_ZERO) {
    endIndex = NUMB_ZERO;
  }
  let arrResult = arr.slice(NUMB_ZERO, endIndex);
  return arrResult;
}
