$(document).ready(function(){
  $("#word").submit(function(event){
    event.preventDefault();
    var wordInput = $("input").val();
    var wordArray = wordInput.split("");
    var reversedArray = wordArray.reverse();
    var reversedWord = "";
    for (index = 0; index < reversedArray.length; index += 1){
      reversedWord = reversedWord.concat(reversedArray[index].toString());
    }
    if (reversedWord === wordInput){
      alert("Palindromes")
    }else{
      alert("not palindromes")
    }
  })
})
