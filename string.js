/*
Your order, please
Instructions
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

Solution
*/

function order(words){
  // ...
  let str = [];
  let wordsArr = words.split(" ");
  const map = new Map();
  const numbers = /[0-9]/g;
  for(let i=0; i<wordsArr.length; i++){
    map.set(parseInt(wordsArr[i].match(numbers)), wordsArr[i]);
  }

  let keys =[ ...map.keys() ];
  let sortedKeys = keys.sort((a,b) => a-b);
  for(key of keys){
    str.push(map.get(key));
  }
  return str.join(" ");
}
