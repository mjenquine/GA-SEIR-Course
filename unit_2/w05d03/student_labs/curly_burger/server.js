const express = require('express')
const app = express()
const PORT = 3000
let d = Date(Date.now())
const orders = [
  { item: "Mad cURLy Fries", created_at: d.toString() },
  { item: "Swirly Milkshake", created_at: d.toString() },
  { item: "Burly Burger", created_at: d.toString() }
]
app.use(express.urlencoded({extended:false}))

app.get('/orders', (req, res) => {
  res.send(orders)
})

app.post('/orders', (req, res) => {
  if (!req.body.item) {
    req.body.item = 'NO DATA, You\'ll get an order of surly soup'
  }
  let d = Date(Date.now())
  req.body.created_at = d.toString()
  orders.push(req.body)
  console.log(orders);
})


// `${d.getMonth()}-${d.getDate()}-${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`
















app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
