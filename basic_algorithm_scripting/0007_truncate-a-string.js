function truncateString(str, num) {
  //console.log(str.substring(0,num)+"...");
  if (str.length>num){
   return str.substring(0,num)+"...";
  }else
  {
    return str;
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);