function isPalindrome(word) {
  
  // covert our string to an array and then reverse then join to get the reverse of out string
  let newArray = word.split('');
  //console.log(newArray)

  let newReversedArray = newArray.reverse();
  //console.log(newReversedArray)

 let joinReverseArray = newReversedArray.join('')
    console.log(joinReverseArray);
 if(word === joinReverseArray){
  // console.log(`${word} Is palindrome`)
  return true;
 }
 else{
   //console.log(`${word} Is not palindrome`)
   return false;
 }
}
 
  


/* 
  Add your pseudocode here
  1. turn the string into an array by using split('') method
  2. reverse the new array using the reverse method
  3. join the revered array using the join('') method
  4. do a comparison of the initial string to the new string f

*/

/* /*
  I expect (racecar) == (racecar) or helloworld !== dlrowolloeh
  (racecar) == (racecar) will console.log("Is palindrome")
  (helloworld !== dlrowolloeh) will console.log("Is not a palindrome")
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  isPalindrome("racecar");
  
  //console.log("Expecting:racecar=== racecar to equal true");
 
  isPalindrome("abba");
  
  // console.log("Expecting: robot === tobor false");
  isPalindrome("a");
  isPalindrome("robot");
  isPalindrome("ab");
  
}

module.exports = isPalindrome; 
  


