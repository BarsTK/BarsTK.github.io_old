function binSearch(arr, searchNumb) {
  const DIFF_IDX_POS = 1;
  var len = arr.length;
  var leftIdx = 0;
  var rightIdx = len - 1;
  var searchedIdx = -1;
  var lenHalf;
  var comparingResult;
  
  if (len == 0) {
    return searchedIdx;
  }
  
  const ASC_FLAG = arr[0] < arr[len - 1];
  
  if (ASC_FLAG ? (searchNumb < arr[0]) && (searchNumb > arr[len - DIFF_IDX_POS]) : 
                              (searchNumb > arr[0]) && (searchNumb < arr[len - DIFF_IDX_POS])) {
    return searchedIdx;
  }
  while (leftIdx != rightIdx) {
    lenHalf= Math.floor(len / 2);
    comparingResult = (ASC_FLAG ? (searchNumb > arr[leftIdx + lenHalf - DIFF_IDX_POS]) : 
                                  (searchNumb < arr[leftIdx + lenHalf - DIFF_IDX_POS]));
    if (comparingResult) {
      leftIdx += lenHalf;
    } else {
        rightIdx -= lenHalf;
    }
    len = (rightIdx + DIFF_IDX_POS) - leftIdx;
  }
  if (leftIdx == rightIdx && searchNumb === arr[leftIdx]) {
    searchedIdx = leftIdx;
  }
  return searchedIdx;
}
