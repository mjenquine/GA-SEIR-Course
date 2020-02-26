const router = require('express').Router()
const Product = require('../models/products.js')

//////////////////////Routes//////////////////////////

//Presentation Rountes////////////////////////////////
//INDEX
router.get('/', (req, res) => {
  Product.find({}, (error, allProducts) => {
    res.render('index.ejs', {
      products: allProducts
    })
  })
})
//NEW
router.get('/new', (req, res) => {
  res.render('new.ejs')
})
//SHOW
router.get('/:id', (req, res) => {
  Product.findById(req.params.id, (error, foundProduct) => {
    res.render('show.ejs', {
      product: foundProduct
    })
  })
})
//EDIT
router.get('/:id/edit', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    res.render('edit.ejs', {
      product: foundProduct
    })
  })
})
//Functional Routes///////////////////////////////////

//CREATE
router.post('/', (req, res) => {
  Product.create(req.body, (error, createdProduct) => {
    res.redirect('/products')
  })
})
//UPDATE
router.put('/buy/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}}, (err, updatedProduct) => {
    res.render('show.ejs', {
      product: updatedProduct
    })
  })
})
router.put('/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
    res.render('show.ejs', {
      product: updatedProduct
    })
  })
})
//DELETE
router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, (error, deletedProduct) => {
    res.redirect('/products')
  })
})



module.exports = router
