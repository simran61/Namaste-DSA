// QUES: Find Most Frequent Vowel and Consonant

// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.

// Example 1:
// Input: s = "successes"
// Output: 6
// Explanation:
// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.

// Example 2:
// Input: s = "aeiaeia"
// Output: 3
// Explanation:
// The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
// There are no consonants in s. Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.

// APPROACH 1 (mine)
var maxFreqSum = function (s) {
  let vowelMaxCount = 0;
  let consonantsMaxCount = 0;

  let vowels = {};
  let consonants = {};

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u"
    ) {
      if (vowels[s[i]]) {
        vowels[s[i]] = ++vowels[s[i]];
      } else {
        vowels[s[i]] = 1;
      }
    } else {
      if (consonants[s[i]]) {
        consonants[s[i]] = ++consonants[s[i]];
      } else {
        consonants[s[i]] = 1;
      }
    }
  }

  vowelMaxCount =
    Object.values(vowels).length > 0 ? Math.max(...Object.values(vowels)) : 0;
  consonantsMaxCount =
    Object.values(consonants).length > 0
      ? Math.max(...Object.values(consonants))
      : 0;

  return vowelMaxCount + consonantsMaxCount;
};

// _______________________________

// APPROACH 2 (video)
var maxFreqSum = function (s) {
  // store all values with freq in a map
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }
  }

  //   find the max vowel and consonant inside the map
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;
  let mapKeys = Object.keys(map);
  for (let i = 0; i < mapKeys.length; i++) {
    // vowels
    if (vowels.includes(mapKeys[i])) {
      if (map[mapKeys[i]] > maxVowel) {
        maxVowel = map[mapKeys[i]];
      }
    } else {
      if (map[mapKeys[i]] > maxConsonant) {
        maxConsonant = map[mapKeys[i]];
      }
    }
  }
  return maxConsonant + maxVowel;
};

// ORRRRRRR (same code, just different writing style)

var maxFreqSum = function (s) {
  // store all values with freq in a map
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
  }

  //   find the max vowel and consonant inside the map
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;
  let mapKeys = Object.keys(map);
  for (let i = 0; i < mapKeys.length; i++) {
    // vowels
    if (vowels.includes(mapKeys[i])) {
      maxVowel = Math.max(maxVowel, map[mapKeys[i]]);
    } else {
      maxConsonant = Math.max(maxConsonant, map[mapKeys[i]]);
    }
  }
  return maxConsonant + maxVowel;
};

// TIME COMPLEXITY: s.length = O(n), includes() = O(1) as it is iterating over vowels array which is of finite length, & mapKeys.length = O(1) since the maximum length can only be 26 (total alphabets) => O(n) + O(1) + O(1) => O(n)
// SPACE COMPLEXITY: map takes contant space as theie are 26 alphabets thus 26 keys & 26 values => O(52) => O(1)
