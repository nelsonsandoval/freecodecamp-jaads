function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i=0; i < arr.length; i++){
    //console.log(arr[i].indexOf(elem));
    //console.log(arr[i]);
    if (arr[i].indexOf(elem) < 0 ){
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));