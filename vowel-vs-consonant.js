function countConsonantsAndVowels(word) {
  // Initialize counters for consonants and vowels
  let consonants = 0;
  let vowels = 0;

  // Loop through each character in the word
  for (let i = 0; i < word.length; i++) {
    // Check if the character is a vowel
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u"
    ) {
      vowels++;
    } else {
      consonants++;
    }
  }

  // Return the result as a string
  return word + " has " + consonants + " consonants and " + vowels + " vowels";
}

