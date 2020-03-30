[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Binary Search Tree

A morning exercise to learn about the CS concept of trees/binary search trees

#### Learning Objectives

- Be able to explain why there are many data types
- Be able to explain what a tree is in terms of data structure
- Be able to define a binary search tree
- Be able to describe the use of a binary search tree

#### Prerequisites

- JavaScript Foundations
- Introduction to computer science, including data structures

---

## Data Structures Review & Intro to Trees

#### From the real world:

- Imagine a dictionary - it is a reference full of data. It is structured alphabetically, often with pages indexed for better searching.
- Imagine a map - it is a reference full of data. It is structured using 2D planes, made up of geometric shapes with scales and directions
- Imagine a ledger - it is a reference full of data. It is usually structured by date, with the same rows and columns, with an area to tabulate totals.

From the above - which is 'the best' data structure

<details><summary>Answer</summary>

Each serve a specific purpose. They are the best for the goals that they serve.

</details>

<br />

#### From programming:

So far, we know about

- Arrays
- Objects

By now, we have a good sense of when to use one or the other.

Let's say we want to create a company's employment hierarchy.

- We have the CEO at the top
- The CTO, COO, and President reporting to the CEO
- Each of the above members has 3-4 people reporting to them
- And those people have 4-6 people reporting to them

Would you use an object or an array?

Taking a few moments, you'd find that both are a bit clunky and non ideal.

What would fit better would be a tree.

![comapny tree](https://i.imgur.com/5kKRwB7.png)

Trees are a different data structure than arrays or objects and they fit nicely for hierarchical relationships as above. They can also work for familial relationships, the DOM or the file structure on your computer.

With our focus on web development, we typically focus on using the tools others have built for us and we hone our skills to use those tools. We don't often worry about how the `.sort` method works, we just learn how to use it.

However, other disciplines focus on building out the tools and they think about how to best store and organize a variety of data like photos, videos, text, so that it can be utilized effectively.

Considerations often involve what you want to do with the data - whether you want to search it quickly, reduce memory usage, be able to read data quickly, or make updates efficiently.

There is no one great perfect data structure to fit all use cases. There are also simpler implementations and more complex ones, all depending on what problem you are trying to solve.

## Tree Terminology

Trees have `nodes`. Each node can branch off, these nodes are the `children` of the `parent` node. Nodes that share the same parent are called `siblings`. Nodes that are on the same `level` but do not have a common parent are **NOT** siblings.

The topmost node is called a `root`. A node that has no children is called a `leaf`

Trees have depths/heights based on the number of nodes that branch off of the root node.

## Binary Tree

A binary tree is a tree that has a constraint that there can only be a maximum of 2 nodes off of each node

![](https://i.imgur.com/n41lQwV.png)

## Binary Search Tree

Let's go back to our example of a real-world dictionary.

When we think about how we use it, we think of the word we want to look up - let's say we want to look up the word `programmer`.

If the dictionary were organized randomly, we'd likely lose hope of finding our word and not even bother.

Rather, the dictionary is sorted alphabetically. This let's us flip through the middle, let's say we land on a page that has definitions for words with the letter `m`: Now we only have to flip from this page to the end and we can eliminate searching the first half of the dictionary to find our word.

Next we land on `r`. Again we can now eliminate every page that comes up after r.

Each time we flip and check we limit our search to less and less pages, until we land on the page with our word on it.

A binary search tree operates in a similar way. First of all - the values are sorted, second of all, once you enter a node you can ignore the rest of the tree.

#### Activity

Let's make a list of 10-12 numbers ranging from 1 - 100. Let's take a few volunteers to call out some numbers

We'll cheat just a little and pick one 'middle'-ish number to be our `root`. Then let's sort our numbers in a binary tree.

Let's draw this out on a whiteboard. Let's take some volunteers to call out a few animals.

#### Activity 2

Let's do the same thing this time we'll sort animals alphabetically.

### Resources

- [A link to relevant documentation](https://www.google.com/)
- Or another [free practice resource](https://www.google.com/)
- etc.

---

_Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
