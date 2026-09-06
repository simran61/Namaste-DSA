// QUES: Length of Last Word - Approach 1 - Two Loops

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// ___________________________

var lengthOfLastWord = function (s) {
  // trim: removes extra spaces from front and back
  // s=      fly me   to   the moon
  s = s.trim(); // fly me   to   the moon
  s = s.split(" "); // [ 'fly', 'me', '', '', 'to', '', '', 'the', 'moon' ]
  return s[s.length - 1].length; //4
};

// _________________________

var lengthOfLastWord = function (s) {
  // start from last char
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      --n;
    } else {
      break;
    }
  }
  // n is the point where my last word starts

  // count the character till you reach a space
  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      --n;
      ++count;
    } else {
      break;
    }
  }
  return count;
};

// __________________________________
// 👇🏻 same logic as above just different way of writing the same code

var lengthOfLastWord = function (s) {
  // start from last char
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] != " ") break;
    --n;
  }
  // n is the point where my last word starts

  // count the character till you reach a space
  let count = 0;
  while (n >= 0) {
    if (s[n] === " ") break;
    --n;
    ++count;
  }
  return count;
};
