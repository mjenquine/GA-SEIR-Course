const express = require('express')
const app = express()
const PORT = 3000

app.get('/greetings/:name', (req, res) => {
  res.send('Well hi there ' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
  let tip = (Number(req.params.tipPercentage) / 100) * Number(req.params.total)
  console.log(tip);
  res.send('The total tip is ' + tip)
})
//Array of magic 8 ball answers
let answerArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
  res.send(`${req.params.question}? Magic 8 Ball answer: <h1>${answerArray[Math.floor(Math.random() * answerArray.length)]}</h1>`)
})



app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
