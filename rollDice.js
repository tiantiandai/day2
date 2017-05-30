function rollDice(num){
  var i;
  var result = '';
  var r;
  for(i = 0; i < num-1; i++)}{
    vat temp = getRandomIntInclusive(1, 6);
    result += temp + ', '
  }
  var t = getRandomIntInclusive(1, 6);
  result += t;
  r = "Roll" + num + "dice: " + result;
  return r;
}