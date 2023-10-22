function reverseWordsInSentence(sentence) {
    // Split the sentence into words using space as the delimiter
    const words = sentence.split(' ');

    // Reverse each word and store the reversed words in an array
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Convert the word to an array of characters
    const wordChars = word.split('');

    // Reverse the array of characters
    const reversedChars = wordChars.reverse();

    // Join the reversed characters back into a word
    const reversedWord = reversedChars.join('');

    return reversedWord;
}

// Example usage
const input = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(input);

console.log("Original Sentence: " + input);
console.log("Reversed Sentence: " + reversedSentence);
