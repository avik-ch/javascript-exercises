function getAge(birth, death) {
    if (death === undefined) {
        death = 2025;
    }
    return death - birth;
}

const findTheOldest = function(arr) {
    return arr.reduce((acc, curr) => {
        return getAge(curr.yearOfBirth, curr.yearOfDeath) > getAge(acc.yearOfBirth, acc.yearOfDeath) ? curr : acc;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
