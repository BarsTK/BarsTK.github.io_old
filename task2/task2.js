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
  const DIF_IDX_ELEM = 1;
  const NUM_ZERO = 0;
  let arrResult = [];
  let from = 0;
  let to;
  let step = 1;

  if (isNumeric(lengthFrom) && lengthFrom > NUM_ZERO) {
    if (isNumeric(toNumb) && toNumb > NUM_ZERO) {
      from = Math.floor(+lengthFrom);
      to = Math.floor(+toNumb);
    } else {
      from = 0;
      to = Math.floor(+lengthFrom) - DIF_IDX_ELEM;
    }
    if (isNumeric(stepNumb) && stepNumb > NUM_ZERO) {
      step = Math.floor(+stepNumb);
    }
    for (let i = from; i < to; i += step) {
      arrResult.push(i);
    }
  }
  return arrResult;
}

function compact1v(arr) {
  let arrResult = [];

    if (isArray1v(arr)) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i] !== null && arr[i] !== '' && arr[i] !== Infinity && arr[i] !== false) {
          arrResult.push(arr[i]);
        }
      }
    }
  return arrResult;
}

function isTruth(value) {
  return value !== undefined && value !== null && value !== '' && value !== Infinity && value !== false;
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

function sum2v(arr) {
  return arr.length !== 0 ? arr.pop() + sum2v(arr) : 0;
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
  var obj = {};

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    obj[elem] = true;
  }
  return Object.keys(obj); //keys are ordered string elements
}

function last(arr) {
  return arr[arr.length - 1];
}

function excludeLast1v(arr, numbExcludeElems) {
  let arrResult = arr;
  let excludeNumb = 1;
  let lastIndex = arr.length - 1;

  if (isNumeric(numbExcludeElems) && numbExcludeElems >= 0) {
    excludeNumb = numbExcludeElems > arr.length ? arr.length : numbExcludeElems;;
  }
  for (let i = lastIndex; i > lastIndex - excludeNumb; i--) {
    arrResult.pop();
  }
  return arrResult;
}

function excludeLast2v(arr, numbExcludeElems) {
  let arrResult = arr;
  let excludeNumb = 1;

  if (isNumeric(numbExcludeElems) && numbExcludeElems >= 0) {
    excludeNumb = numbExcludeElems > arr.length ? arr.length : numbExcludeElems;
  }
  arrResult.length = arr.length - excludeNumb;
  return arrResult;
}

function excludeLast3v(arr, numbExcludeElems) {
  let arrResult = arr;
  let excludeNumb = 1;

  if (isNumeric(numbExcludeElems) && numbExcludeElems >= 0) {
    excludeNumb = numbExcludeElems;
  }
  let fromIndex = arr.length - excludeNumb;
  if (fromIndex < 0) {
    fromIndex = 0;
  }
  arrResult.splice(fromIndex);
  return arrResult;
}