# Integrating React w/Rails - Part 1: An Overview and Setup

Today, we will be learning how to put everything we've learned this unit together into one app. We will primarily be focusing on how to get your React frontend to interact with your Rails backend.

### Lesson objectives

_After this lesson, students will:_

  - Understand the basics of integrating React _into_ Rails and interacting with the backend

## The Basics

Believe it of not, you've already learned all the tools you'll need for this build

For example, you've already learned...

- [How to use the `fetch` method to get data](../../w11d04/instructor_notes/4.%20React_AJAX.md)
- How to build a Rails API using postgres

So, the majority of the build we'll be doing today will be review and to help you understand how all the pieces fit together.

Let's get started by taking a quick look at what we'll be building first.

# Heard It Through The Grapevine

![](https://imgur.com/v40qrQQ.gif)

## About the app

The app we'll be making is a very simple noticeboard-esque app as shown above. It will allow users to...

- Create posts
- Edit posts
- Delete posts
- See all posts on the index
- Toggle between seeing all posts and seeing the edit or create form

## About the API  

Included in the starter code is a fully working, basic one-model (posts) API for us to use during this integration build. Let's take a look at what's given

### Model: Posts

_Relevant files:_

- `app/models/post.rb`
- `app/controllers/posts_controller.rb`

_PG Columns:_

- id (SERIAL)
- name (VARCHAR 256)
- image (VARCHAR 256)
- body (TEXT)


## About the Frontend

I've gone ahead and included some starter code for the sake of time. 

The API we're working with is only one model, posts, so our app will be relatively small -- but we'll still be breaking it down into components! Breaking your files and functionality into separate components makes files easier to manage and read through, so it's best to get into the habit of it now.

The starter code has all the component files that we'll need with some basic code that we'll be building upon.

### The Components

  - `App`: the main parent component, will encompass all components below and will handle the state of the views
  - `Header`: just the header, stateless, but nice to separate anyway
  - `Aside`: the sidebar, holds some of the buttons that can toggle between the views
  - `Main`: the main content area, will encompass the form and the posts; the component that will change depending on the view
  - `Post`: the post component, holds all displayed post info
  - `Form`: the form used to create _and_ edit posts! remember, React components are  _reusable_

### The Styling

To save us time and to also give us a decent app to look at as we build throughout the day, I have provited some CSS styling for us ahead of time so that all we have to do to get a nice looking app is add the classes. 

_Relevant Files_

- `src/index.css` holds all the css

### The Flowchart

![](https://imgur.com/xRdv5TJ.png)

---

# Setting Up the Starter Code

Now that we know what's actually in our starter code, let's get set up!

  - Create the `grapevine` database (rails db:create)
  - Connect to the rails console (rails c or rails console)
  - Insert some data into the database:
  ```sql
  Post.create(name:"Brendan", image: "N/A", body: "Brendans Post")
  Post.create(name:"Karolin", image: "N/A", body: "Karolins Post")
  Post.create(name:"Arthur", image: "N/A", body: "Arthurs Post")
  Post.create(name:"Ayla", image: "N/A", body: "Aylas Post")
  
  ```
  - You can close down the rails console now
- Run rails s
- Open https://localhost:3000/posts in your browser to make sure your database was seeded correctly

You're now all set with the starter code!

---

# Arrow Functions vs. Function Declaration

Before we get started, I just wanted to talk about one last thing: arrow functions vs. function declarations.

_Reminders_

  - **Function declaration** is when a function is written like
  ```js
  functionName() {
    // function stuff in here!
  }
  ```
  - **Arrow functions** are functions written like
  ```js
  functionName = () => {
    // function stuff in here!
  }
  ```

So far, we've taught you guys to use function declaration when writing methods in your react components. React documentation also shows you to write your methods that way, which is why we chose to show you writing them in that way since it's the classic 'react way'. Writing your methods out that way also makes your code look more consistent since you call the constructor and render methods using function declaration as well.

That said, it's not like you _can't_ use arrow functions inside react components. The main benefit to doing so is that you do not have to `.bind(this)` for every method you write that utilizes `this`.

### Why don't we need to `.bind(this)` when using arrow functions?

The main difference between function declarations and arrow functions in JavaScript are how they treat `this`.

  - **In function declarations**, the value of `this` will refer to the `this` of the function in itself, and therefore will always change depending on where the function is being called
  - **In arrow functions**, the value of `this` will refer to the `this` of the _environment_ that the function itself _resides_ in

In essence, arrow functions `this` will always refer to the same `this`, no matter where the function is being called.

So, for example, if you write arrow functions inside of an `App` component, `this` will always refer to the `this` of the App class, even though we didn't `.bind(this)`

If any of that doesn't quite make sense yet, that's perfectly fine! For our purposes, all you need to know is that if you use arrow functions in React class components, you don't need to .bind(this). Which is what we'll be doing today!

---

**NEXT:** [FETCHING AND DISPLAYING OUR DATA](2_Fetching_and_Displaying_Data.md)
