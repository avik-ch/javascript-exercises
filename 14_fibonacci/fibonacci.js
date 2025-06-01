const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num < 3) return 1;
    let val1 = val2 = 1;
    for (let i = 2; i < num; i++) {
        [val2, val1] = [val1 + val2, val2];
    }
    return val2;
};

// Do not edit below this line
module.exports = fibonacci;
