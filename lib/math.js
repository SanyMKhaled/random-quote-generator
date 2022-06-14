/*
 * Project Title: Random Quote Generator
 * Description: Generates random Quotes each second
 * Author: Sany Mohammad Khaled
 * Date: 14/06/2022
 */

// App object - Module scaffolding
const math = {};

// Main Function

math.getRandomInteger = function getRandomInteger(min, max) {
    let minimum = min;
    let maximum = max;

    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;

    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

// Export Module
module.exports = math;
