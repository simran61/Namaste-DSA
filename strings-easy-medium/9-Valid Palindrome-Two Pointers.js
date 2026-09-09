// QUES: Valid Palindrome - Two Pointers

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
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) ++i;
    else if (!s[j].match(/[a-z0-9]/i)) --j;
    else if (s[i] === s[j]) {
      ++i;
      --j;
    } else {
      return false;
    }
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
