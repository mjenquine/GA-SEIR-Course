// Dependencies ===============
const express = require('express');
const app = express();
const port = 3000;
app.listen(port);

// Routes ===============
app.get('/', (req, res) => {
    res.send(`99 Bottle of beer on the wall. <a href="/98">Take one down and pass it around...</a>`);
})

app.get('/:number_of_bottles', (req, res) => {
    const next = req.params.number_of_bottles -1;

    if(req.params.number_of_bottles === '0'){
        res.send(`We're out of beer. <a href="/">Time to restock!</a>`)
    } else {
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall. <a href="${next}">Take one down and pass it around...</a>`)
    }
})
