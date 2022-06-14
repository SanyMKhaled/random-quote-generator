/*
 * Project Title: Random Quote Generator
 * Description: Generates random Quotes each second
 * Author: Sany Mohammad Khaled
 * Date: 14/06/2022
 */

// Dependencies
const math = require('./lib/math');
const quotes = require('./lib/Quotes/readQuotes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    intervalTime: 2000,
};

// Main Functions
app.generateRandomQuote = function generateRandomQuote() {
    const allQuotes = quotes.allQuotes();
    const totalQuotes = allQuotes.length;

    const randomNumber = math.getRandomInteger(1, totalQuotes);

    const quoteToPrint = allQuotes[randomNumber - 1];
    console.log(quoteToPrint);
};

app.loop = function loop() {
    setInterval(app.generateRandomQuote, app.config.intervalTime);
};

// Invoke the loop
app.loop();
