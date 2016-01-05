function largestOfFour(arr) {
  
  var biggestArr = [];

  for(var i = 0; i < arr.length; i++){
    var largest = 0;
    for(var k = 0; k <= arr[i].length; k++ ){
      if(arr[i][k] > largest){
         largest = arr[i][k]; //largest num changes from 0 to largest in array as it loops
      }
    }
   biggestArr[i] = largest;

  }
  return biggestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
