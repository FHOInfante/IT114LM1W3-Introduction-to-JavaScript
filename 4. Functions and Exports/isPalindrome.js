// Todo 4.6a Create a function called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation
function isPalindrome(word){
    let j = word.length - 1
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[j]) {
            return "False";
        }
        j--;
    }
    return "True";
};
// Todo 4.6b Set the isPalindrome function as the default export of the module
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
export default isPalindrome;