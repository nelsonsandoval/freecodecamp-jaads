function largestOfFour(arr) {
  let maxElement = [];
  for (let i=0; i<arr.length; i++){
    let tmpMax = -1000;
    for (let j=0; j < arr[i].length; j++){
      //console.log(arr[i][j]);
      if (arr[i][j]>=tmpMax){
        tmpMax = arr[i][j];
      }
    }
    maxElement.push(tmpMax);
    tmpMax = 0;
    //console.log(maxElement);
  }
  return maxElement;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);