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

function isTruth(value) {
  return value == true;
}

function compact1v(arr) {
  let arrResult = [];

    if (isArray1v(arr)) {
      for (let i = 0; i < arr.length; i++) {
        if (isTruth(arr[i])) {
          arrResult.push(arr[i]);
        }
      }
    }
  return arrResult;
}

function compact2v(arr) {
  let arrResult = arr.filter(isTruth);

  return arrResult;
}

function sum1v(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//It doesn't work for missed or wrong elements
function sum2v(arr) {
  const LENGTH_WITH_ADD_PAR = 2;
  const IDX_ADD_PAR = 1;
  const DIF_IDX_ELEM = 1;
  const LAST_IDX = arr.length - DIF_IDX_ELEM;
  
  function summ(array) { //I entered inner function to not create constants every itself calling
    let curIdx = 0;
  
    if (arguments.length == LENGTH_WITH_ADD_PAR) {
      curIdx = arguments[IDX_ADD_PAR];
    }
    return curIdx <= LAST_IDX ? arr[curIdx] + summ(arr, curIdx + 1) : false;
  }
  return summ(arr);
}

function sum3v(arr) {
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
