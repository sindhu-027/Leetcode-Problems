function reverseVowels(s) {
    // Convert the string to an array for easy manipulation
    let charArray = s.split('');
    
    // Helper function to check if a character is a vowel
    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
    }

    // Initialize two pointers for the start and end of the array
    let left = 0;
    let right = charArray.length - 1;

    // Swap vowels using the two pointers
    while (left < right) {
        // Move left pointer to the next vowel
        while (left < right && !isVowel(charArray[left])) {
            left++;
        }

        // Move right pointer to the next vowel
        while (left < right && !isVowel(charArray[right])) {
            right--;
        }

        // Swap the vowels
        [charArray[left], charArray[right]] = [charArray[right], charArray[left]];

        // Move the pointers towards each other
        left++;
        right--;
    }

    // Join the array back to a string and return
    return charArray.join('');
}

// Example usage:
const inputString = "Hello World";
const reversedString = reverseVowels(inputString);
console.log(reversedString); // Output: Holle Werld