function isPalindrome(string) {
    const newString = string.split('').reverse().join('');

    if (!(string === newString)) return false
    return true;
}

function sortValues(data) {
    return data.sort(function (a, b) {
        return b.length - a.length
    });
}

function palindromeSearch(str) {
    let inputStr = str.split(' ').join('');
    let subStrings = [];

    while (inputStr.length > 0) {
        let temp = '';
        for (let i = 0; i < str.length; i++) {
            temp += inputStr[i];
            if (isPalindrome(temp) && temp.length > 2) {
                subStrings.push(temp);
            } else {
                subStrings;
            }
        }
        inputStr = inputStr.slice(1);
    }
    return sortValues(subStrings)
}

console.log(palindromeSearch('CIVIC'));
