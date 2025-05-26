const removeFromArray = function(arr, ...vals) {
    return arr.filter((n) => !vals.includes(n));
};

// Do not edit below this line
module.exports = removeFromArray;
