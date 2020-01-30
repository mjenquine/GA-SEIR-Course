# EVENT BUBBLING

## Lesson Objectives

1. Describe event bubbling
1. Prove that event bubbling occurs
1. Access the event parameter
1. Differentiate between an event's `target` and `currentTarget`
1. Stop event propagation
1. Have an event handler return false

## Describe event bubbling

When elements are nested within the DOM, the DOM needs a way to decide which elements ought to trigger an event.

![](https://i.imgur.com/ZwtfS98.png)

If a click event listener is set on the outer element, the green box, will a click on the inner element, the pink box, also trigger the event?

Does the pink box somehow 'block' the event? Does the "click me" text block it?

What _belongs_ to the green box?

```javascript
  $('.outside').on('click', () => {
    console.log('OUTSIDE is clicked');
  });
```

![](https://i.imgur.com/HuTEZIn.png)

Nothing within the green box blocks the event. Everything belongs to the green box. No matter where inside the green box you click, you'll get the console log.

### Bubbles

When you click on the pink box, this is the lowest level of your mouse location, the `target` of the event. JS checks to see if there is an event listener on this element.

Then, the event bubbles up to the parent, the green box, and checks to see if there is a listener there.

But, it doesn't stop there!

The event bubbles up through all parents to the body, and checks that too!

The event finally stops bubbling at the `document`.

## Prove that event bubbling occurs

So, if we set a listener on the pink element, the question is, will that also trigger the listener on the green one? Will it "bubble" up?

```javascript
  $('.outside').on('click', () => {
    console.log('OUTSIDE is clicked');
  });

  $('.inside').on('click', () => {
    console.log('INSIDE is clicked');
  });
```

Clicking on the innermost element:

![](https://i.imgur.com/y1wUz8c.png)


### Test bubbling: Set listener on body

```javascript
  $('.outside').on('click', () => {
    console.log('OUTSIDE is clicked');
  });

  $('.inside').on('click', () => {
    console.log('INSIDE is clicked');
  });

  $('body').on('click', () => {
    console.log('BODY is clicked');
  });
```

Clicking on the innermost element:

![](https://i.imgur.com/yNHoVTJ.png)

## Access the event parameter

```javascript
  $('.inside').on('click', (event) => {
    console.log('INSIDE is clicked');
  });
```

When the `.on` method (or any JS event listener method) runs the callback function, it supplies the callback with an argument: an object that represents the event.

We can use this param in our callback. Call it what you like: you will see `e`, `ev`, `event`, etc.

## Differentiate between an event's `target` and `currentTarget`

On the `event` object, you can see the innermost thing that was clicked with `event.target`, and the thing that has the event listener with `event.currentTarget`.

**Comment out the inside and body event listeners**

On the outside event listener:

```javascript
  $('.outside').on('click', (event) => {
    console.log('OUTSIDE target is: ', event.target);
    console.log('OUTSIDE currentTarget is: ', event.currentTarget);
  });
```

If you click the green box (the outside element):

![](https://i.imgur.com/MjYtPJj.png)

`target` and `currentTarget` are the same.

If you click the pink element (the inner element), we expect the event to bubble to the outside and trigger the event listener:

![](https://i.imgur.com/QU8aryL.png)

`target` is the innermost element that was clicked: the **inside** pink one.

`currentTarget` is the element on which the event listener is set: the **outside** green one.

### Consider this

```javascript
  $('.outside').on('click', (event) => {
    console.log('OUTSIDE target is: ', event.target);
    console.log('OUTSIDE currentTarget is: ', event.currentTarget);
  });

  $('.inside').on('click', (event) => {
    console.log('INSIDE target is: ', event.target);
    console.log('INSIDE currentTarget is: ', event.currentTarget);
  });

  $('body').on('click', (event) => {
    console.log('BODY target is: ', event.target);
    console.log('Body currentTarget is: ', event.currentTarget);
  });
```

If you click on the body, which listeners will be triggered? what will be the value of `target` for each listener? and what will be the value of `currentTarget` for each listener?

If you click on the outside box, which listeners will be triggered, what will be the value of `target` for each listener? and what will be the value of `currentTarget` for each listener?

If you click on the inner box, which listeners will be triggered? what will be the value of `target` for each listener? and what will be the value of `currentTarget` for each listener?

## Element targeting with jQuery

Let's say I make a few copies of the squares:

```html
    <div class="outside">
      <p>Click me ... ?</p>  
      <div class="inside"></div>
    </div>

    <div class="outside">
      <p>Click me ... ?</p>  
      <div class="inside"></div>
    </div>

    <div class="outside">
      <p>Click me ... ?</p>  
      <div class="inside"></div>
    </div>
```

 ![](https://i.imgur.com/TBfw31S.png)


By wrapping `event.currentTarget` in jQuery I can use jQuery methods on the target, and only affect the elements I clicked (not the others)

```javascript
$(event.currentTarget).css('background-color', 'black');
```

```javascript
  $('.outside').on('click', (event) => {
    $(event.currentTarget).css('background-color', 'black');
  });
```

![](https://i.imgur.com/XilWxHt.png)

## Stop event propagation

If you want to isolate an element and prevent bubbling, use

* `event.stopPropagation()`

```javascript
  $('.inside').on('click', (event) => {
    console.log('INSIDE target is: ', event.target);
    console.log('INSIDE currentTarget is: ', event.currentTarget);
    event.stopPropagation();
  });
```

Clicking on the inside element no longer triggers the outer event listeners:

![](https://i.imgur.com/NvYnaQI.png)

Clicking on the outer event listener still triggers bubbling as expected:

![](https://i.imgur.com/2AMW1gK.png)


## Have an event handler return false

When using jQuery, you can use `return false` within your event handlers to stop all of the default behavior associated with events, such as bubbling.

* `event.stopPropagation()` to stop bubbling
* `event.preventDefault()` to stop forms from refreshing the page

```javascript
  $('.outside').on('click', (event) => {
    console.log('OUTSIDE target is: ', event.target);
    console.log('OUTSIDE currentTarget is: ', event.currentTarget);
    return false;
  });

  $('.inside').on('click', (event) => {
    console.log('INSIDE target is: ', event.target);
    console.log('INSIDE currentTarget is: ', event.currentTarget);
    return false;
  });

  $('body').on('click', (event) => {
    console.log('BODY target is: ', event.target);
    console.log('Body currentTarget is: ', event.currentTarget);
    return false;
  });
```
