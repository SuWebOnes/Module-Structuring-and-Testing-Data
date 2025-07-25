function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
//  increments by 1 in every iteration using index++.
// b) What is the if statement used to check
//  checks if the character at the current index matches the specified character.
// c) Why is index++ being used?
// It moves the pointer forward through the string. Without it, the loop would run infinitely.

// d) What is the condition index < str.length used for?
// It ensures we don’t read beyond the string boundary — this prevents errors or undefined behavior.
