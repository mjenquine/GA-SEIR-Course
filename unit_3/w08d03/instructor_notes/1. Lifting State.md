# React Lifting Up State

## Learning Objectives
 - Learn how to lift state up from a component

React's data flow is unidirectional and data flows down: Data moves from parent components down. A parent component has no idea about the state of its child components.

Let's say we have 3 components:
- App
  - AllTheThings
  - MyShoppingCart


We want to add products to our shopping cart by clicking on the item.

![](https://i.imgur.com/puNbtso.png)


There is no way to move data from one sibling to another. We will have to lift state up out of `AllTheThings` into the `App` component and then pass it down to `MyShoppingCart`.

Let's add state to the app component

**App.js**

```js
this.state = {
  products: products,
  cart: []
}
```
Now, let's add a function that lets us add things to our cart

```js
addToCart (item) {
  console.log(item)
  this.setState({cart: [item, ...this.state.cart]})
  console.log(this.state.cart)
}
```

Bind it!

```js
constructor (props) {
  super(props)
  this.state = {
    products: products,
    cart: []
  }
  this.addToCart = this.addToCart.bind(this)
}
```

Let's pass this function down into `AllTheThings`

```js
<AllTheThings product={product} key={index} handleAdd={this.addToCart}/>
```


**AllTheThings.js**

We want to call this function on click of one of our list items.

We also need to pass in an argument to this function. We can't add `()` or else the function would fire on page load.

We have to wrap it in an anonymous function in order to be able to pass it an argument.

```js
        <li onClick={()=>this.props.handleAdd(this.props.product)}> {this.props.product.name} {this.props.product.price}</li>
```

When we click we should see a log of the item and the cart

**GOTCHA**

![](https://i.imgur.com/JBcuwp0.png)

Javascript is asynchronous. So you'll see that we clicked the allen wrench and then console logged the cart array but it is empty!

Then when we click the next item, the array has one item!

This is because it takes longer for things to update with `setState` than to fire off the console.log. We use a callback in set state to have more control of the order of events. But for now, we'll just work on rendering our items in our cart.

**App.js**

```js
<MyShoppingCart cart={this.state.cart}/>
```

Let's render our cart list

**MyShoppingCart.js**

```js
return (
  <div className="MyShoppingCart">
    <h2>Your Cart!</h2>
    <ul>
    {this.props.cart.map((item, index)=> {
      return (
        <li key={index}>{item.name}</li>
      )
    })}
    </ul>
  </div>
);
```

### Challenge

When you add an item, it adds to the list, if you add multiples of the same item, it just adds to the array. Upgrade this app so that when you have one item it adds to the list. But if you add the same item to your cart it will just stay as one item and show a count total
