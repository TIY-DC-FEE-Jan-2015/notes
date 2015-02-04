function halve(number) {
  return number / 2;
}

function halveArray(array) {

  for (var steve = 0; steve < array.length; steve++) {
    array[steve] = halve(array[steve]);
  }

  return array;

}







function reverseWord(word) {

  var reversed = [];
  var counter = 0;

  while(counter < word.length) {

    var letter = word[counter];

    reversed.unshift(letter);

    counter++;

  }

  return reversed.join("")

}

function reverseSentence(sentence) {

  var words = sentence.split(" ");
  var counter = 0;

  while(counter < words.length) {

    var word = words[counter];

    var reversed = reverseWord(word);

    words[counter] = reversed;

    counter++;

  }

  return words.join(" ")

}