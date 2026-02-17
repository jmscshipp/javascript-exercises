const sumAll = function(num1, num2) 
{
    if (num1 < 0 ||  num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
        return "ERROR";

    let total = 0;
    let startInt, endInt;
    if (num1 > num2)
    {
        startInt = num2;
        endInt = num1;
    }
    else
    {
        startInt = num1;
        endInt = num2;
    }
    for (let i = startInt; i <= endInt; i++)
        total += i;
    return total;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
