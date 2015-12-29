function firstLetterEaWordCaps(str) {
  var words = str.toLowerCase().split(" ");
  for(var i =0; i < words.length; i++){
     words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); 
   
  }
  
  str = words.join(" ");
  console.log(str);
  return str;
}

firstLetterEaWordCaps("What do you MEAN?");