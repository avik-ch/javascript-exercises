const sumAll = function(a, b) {
    if (Math.min(a, b) < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

    if (a > b) [a, b] = [b, a];

    let total = 0;
    for (let i = a; i <= b; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
