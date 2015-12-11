function factorial(num){
  for(var i = num-1; i >= 2; i--){//func gonna run only when i>=2
    num *= i; //aka num = num *i .return number multiplied by i. Next loop i will be 1 less than last loop.
    console.log(num);
}
console.log(num);
return num;
}

factorial(6);