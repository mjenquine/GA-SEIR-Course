[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Biscoff Bakery

![](https://i.ytimg.com/vi/CIGk1sgCfSg/maxresdefault.jpg)

A new bakery specializing in Biscoff-inspired sweets is opening up soon and has asked you to help get their website started. They've given you some data to work with, but it's up to you to add some view layers to the app and add in some functionality that will allow the owners to add new baked goods when needed. Let's get started!

#### Learning Objectives

- Practice with setting up a basic express server with view layers

#### Prerequisites

- JavaScript
- Node
- Express

---

## Getting Started

You can find the starter code for this morning's lab in `student_labs/morning/biscoff-starter` -- work in that folder!

#### Provided in the starter code
1. `server.js` has a basic express server up and running, along with routes for *index* and *show*

1. `package.json` and `package-lock.json` have already been generated with express as a dependency
    - _Remember:_ what terminal command should you run to install dependencies from a package.json file?

1. `models/bakedgoods.js` holds your 'database' for this app, in this case a bunch of cookie butter based baked goods!

## Activity
Currently, the *index* and *show* routes only sends JSON data to the browser -- update the routes so that there are actual view pages for both

### Adding Views
1. On the **index page**, display the names and prices of all the baked goods
    - Make it so that the names are links to the baked good's show page

1. On the **show page**, display the name, price, and image of the baked good
    - Provide a link somewhere on the show page that lets the user return to the index

Now, the bakery owners want the ability to add new baked good products.

### Adding new routes (new and create)
1. Make a **new page** that serves up a form for adding new baked goods

1. Make a **post route** that handles the form submission and pushes the new baked good into the 'database'
    - Make it so that upon submission, the app redirects back to the index page where you should be able to see the new baked good added

### Hungry for More?


1. Practice some CSS/design and style the app! Want practice with using CSS frameworks? Consider using [Skeleton](http://getskeleton.com/), [Materialize](http://materializecss.com/), [Bulma](https://bulma.io/), or find another of your choosing!

1. Make an array called `cart`
1. Make it so you can add items to the `cart`
1. find a way to show these items in the browser
1. get the sum of the items in the `cart` - find a way to show the sum

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
