/*
 * Project Title: Random Quote Generator
 * Description: Generates random Quotes each second
 * Author: Sany Mohammad Khaled
 * Date: 14/06/2022
 */

// Dependencies
const fs = require('fs');

// App object - Module scaffolding
const quotes = {};

// Main Functions
quotes.allQuotes = function allQuotes() {
    const content = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');
    const arrayOfQuotes = content.split(/\r?\n/);
    return arrayOfQuotes;
};

// Export Module
module.exports = quotes;
