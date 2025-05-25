const repeatString = function(str, times) {
    if (times < 0) {
        return 'ERROR';
    }
    let ans = '';
    for (let i = 0; i < times; i++) {
        ans += str;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
