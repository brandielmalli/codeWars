/*
Next Prime
Instructions:
Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 1012

Examples
5  ==> 7
12 ==> 13
Solution:
*/

function nextPrime(n){
  //have fun ^.^
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num !== 1;
  }
  while(true){
    n++;
    if(isPrime(n) === true){
      return n;
    }
  }
}
