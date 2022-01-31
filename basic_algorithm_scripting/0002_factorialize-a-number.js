function factorialize(num) {
  if (num > 0){
    return num*factorialize(num - 1);
  }
  else{
    return 1;
  }
  return num;
}

console.log(factorialize(0));