
function isPalindrome(word, words) {
    return word === word.split('').reverse().join('') && !words.includes(word);
}

function palindromesInString(str) {
    let subStrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length - i; j++) {
            const subString = str.substring(j, j + i + 1);
            if (subString && subString.length > 1 && isPalindrome(subString, subStrings)) {
                subStrings.push(subString);
            }
        }
    }
    return subStrings.sort((a, b) => b.length - a.length);
}

function getPalindromes() {
    const str = document.getElementById('palindromes').value;
    const palindromesValArr = `[${this.palindromesInString(str).join(',')}]`;
    document.getElementById('palindromeList').innerHTML = palindromesValArr;
}