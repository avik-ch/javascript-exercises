const reverseString = function(str) {
    // return str.split('').reverse().join('');
    let ans = '';
    for (let i = 0; i < str.length; i++) {
        ans = str.charAt(i) + ans;
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
