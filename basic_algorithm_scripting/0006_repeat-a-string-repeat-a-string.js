function repeatStringNumTimes(str, num) {
  let myStr=str;
  if (num<=0) {
    return "";
  }
  for(let i=0; i<num-1; i++){
    myStr=myStr+str
  }
  //console.log(myStr);
  return myStr;
}

repeatStringNumTimes("*", 3);