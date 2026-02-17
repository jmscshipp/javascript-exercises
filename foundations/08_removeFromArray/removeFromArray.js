const removeFromArray = function(array, ...TheArgs) 
{
    return array.filter((val) => !TheArgs.includes(val));
};

const array = [1, 2, 3, 4, 5];
console.log(removeFromArray(array, 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
