function binSearch(arrIn, searchNumb) {
  var arr = arrIn.split(',');
  var len = arr.length;
  const ascFlag = (+arr[0] < +arr[len - 1]);
  const diffIdxPos = 1;
  var leftIdx = 0;
  var rightIdx = len - 1;
  var searchedIdx = -1;
  var lenHalf;
  var comparingResult;
  
  if (ascFlag ? (+searchNumb < +arr[0]) && (+searchNumb > +arr[len - diffIdxPos]) : 
                (+searchNumb > +arr[0]) && (+searchNumb < +arr[len - diffIdxPos])) {
    return searchedIdx;
  }
  while (leftIdx != rightIdx) {
    lenHalf= Math.floor(len / 2);
    comparingResult = (ascFlag ? (+searchNumb > +arr[leftIdx + lenHalf - diffIdxPos]) : 
                                  (+searchNumb < +arr[leftIdx + lenHalf - diffIdxPos]));
    if (comparingResult) {
      leftIdx += lenHalf;
    } else {
        rightIdx -= lenHalf;
    }
    len = (rightIdx + diffIdxPos) - leftIdx;
  }
  if (leftIdx == rightIdx && +searchNumb == +arr[leftIdx]) {
    searchedIdx = leftIdx;
  }
  return searchedIdx;
}
