// QUES: Valid Palindrome - Extra Space

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    // if (
    //   (s[i].charCodeAt() >= "a".charCodeAt() &&  s[i].charCodeAt() <= "z".charCodeAt()) ||
    //   (s[i].charCodeAt() >= "0".charCodeAt() &&  s[i].charCodeAt() <= "9".charCodeAt())
    // )

    //using regex
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
    }
  }
  let rev = filteredString.split("").reverse().join("");

  return filteredString === rev;
};

// APPROACH 2 : without using in-built js function
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
      rev = s[i] + rev;
    }
  }
  return filteredString === rev;
};

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n+n) => O(2n) => O(n)
