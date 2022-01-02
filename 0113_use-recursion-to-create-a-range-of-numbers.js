function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
    return [];
  } else {
    const myArray = rangeOfNumbers(startNum + 1, endNum );
    myArray.unshift(startNum);
    //console.log(myArray);
    return myArray;
  }
};

console.log(rangeOfNumbers(4,4));