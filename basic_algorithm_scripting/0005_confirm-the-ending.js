function confirmEnding(str, target) {
  //console.log(str.slice(0,8));
  return str.slice(str.length-target.length)===target;
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");