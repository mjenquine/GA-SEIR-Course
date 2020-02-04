[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Random Imager

#### Learning Objectives

- Creating elements with jQuery
- JavaScript control flow

#### Prerequisites

- JavaScript
- jQuery

---

## Getting Started

1. In today's `student_labs` create a `random_imager` directory with the following files: 

  - `index.html`
  - `app.js`
  - `style.css`

---

## The Task 

![](https://i.imgur.com/XBC5rpN.png)

- Using jQuery, make a div with the text "Add random image". Add a class to make the div square (100 x 100). Give it some color.
- The div should have cursor: pointer in its CSS, so that when the user hovers the cursor over the div, the cursor turns into a pointer thing.
- Given this array: 
```js 
const cards = [
  'https://www.trustedtarot.com/img/cards/the-fool.png',
  'https://www.trustedtarot.com/img/cards/the-magician.png',
  'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
  'https://www.trustedtarot.com/img/cards/the-empress.png',
  'https://www.trustedtarot.com/img/cards/the-emperor.png',
  'https://www.trustedtarot.com/img/cards/the-heirophant.png',
  'https://www.trustedtarot.com/img/cards/the-chariot.png',
  'https://www.trustedtarot.com/img/cards/strength.png',
  'https://www.trustedtarot.com/img/cards/the-hermit.png',
  'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
  'https://www.trustedtarot.com/img/cards/justice.png',
  'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
  'https://www.trustedtarot.com/img/cards/death.png',
  'https://www.trustedtarot.com/img/cards/temperance.png',
  'https://www.trustedtarot.com/img/cards/the-tower.png',
  'https://www.trustedtarot.com/img/cards/the-moon.png'
]
```

- Make it so that when you click the "Add random image" div, one random image from your array will appear on the page.
- Make it so an image is added rather than replaced.
- Make it so the images are added horizontally.
- Each added image can run the same function to achieve this goal.

## Hungry for More? 
- Add an input element that takes a new URL that allows you to add a new URL string to your array
- Use the URL to make a human readable alt attribute. ex: `https://www.trustedtarot.com/img/cards/the-fool.png` to be `The Fool`
- Make it so that when you click on one of the added images, it will be removed from the page.

## Even Hungrier for More?

We can run any procedure we like with our clicks:

**For your labs:**

1. EXTRA RESEARCH CHALLENGE: Add an input box and a button to your labs. When the button is clicked, grab the value of the text inside the input box, and use that value as an argument in your generateCheckerBoard(NUM) and generatePyramid(NUM) functions.

**From today's lessons:**

1. Construct a horrible digital quilt
1. Construct a pyramid made from triangles
1. Make the Virtual Rolodex from the morning lesson if you haven't done so.

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
