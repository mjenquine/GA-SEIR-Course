![](/ga_cog.png)

# Project #1: Your first application

## Attendance
There are no full day classes during project weeks, but we do expect you to be working on your project daily and be available during the usual class times (10AM - 6PM Eastern) for TA hours or any meetings with instructors as needed.  

There are **no attendance checks during this project week, except:**

  - **Thursday, Feb 13**: Project presentation day! You're required to be in the class zoom starting at 10:00 AM Eastern
    - You will also have Outcomes as normal on Wednesday at the end of the day starting at 4:30 PM Eastern

_Failure to make an attendance check will result in an unexcused absence for both morning and afternoon for that day_.

## Project Details

### &#x1F534; Mandatory To Pass:
#### MVP - Minimum Viable Product

#### Your application must meet these requirements:

  1. Built with HTML, CSS, JavaScript and jQuery
  2. Hosted on github pages<br>
  3. Commits to github every day<br>
  4. A `README.md` file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

#### The app must:

  1. Use AJAX to make a request to an external data source like OMDBapi and insert some of the data retrieved into the DOM
  1. Implement responsive design (i.e. it should be fully functional on desktop, tablet, mobile, etc)
  1. Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc**
  
  ** Note regarding your complex UI module: you should build this from scratch using jQuery.  The point is to test your ability to combine HTML/CSS with some basic interactivity.  If you’re shaky on how to do this, you can reference the Modal and Carousel morning exercises (or anything else we covered in class).  **DO NOT** use libraries like jQueryUI.  Build it from scratch.  Also, **DO NOT** google “jquery carousel” and then just copy and paste the code. 

### 📋 List of API's

Below is a non-exhaustive list of some free API's you can use. There are _many_ API's out there, however, so if you find one not on this list that you'd like to use, feel free! Please note that some may require signing up for an API key (e.g. the Marvel API).

  1. Marvel: https://developer.marvel.com/
  1. Star Wars: https://swapi.co/
  1. Weather: https://openweathermap.org/api
  1. News: https://newsapi.org/
  1. Giphy: https://developers.giphy.com/
  1. Pokemon: http://pokeapi.co/
  1. Card Deck: https://deckofcardsapi.com/
  1. Google Books: https://developers.google.com/books/
  1. City of Chicago: https://data.cityofchicago.org/
  1. Beer: https://www.brewerydb.com/developers
  1. Chuck Norris: http://www.icndb.com/
  1. Rick and Morty: https://rickandmortyapi.com/documentation/#rest
  1. Open Trivia DB: https://opentdb.com/
  
Lastly, the following sites congregates a bunch of API's together, so you can take a look through their libraries and try to find an API that interests you! Note, however, that not all API's are free and many listed may require payment. We **highly suggest** to use a free API for your first project dealing with one. 

  1. https://github.com/toddmotto/public-apis
  1. https://rapidapi.com/

### &#x1F535; Stretch Goals (Not Mandatory):
#### Recommended Features

- Game functionality (e.g. a quiz)
- Look into [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so you can save data to the user's browser 

## Make A New Repo

:heavy_exclamation_mark: You will be using GitHub, **not** GitHub Enterprise!

:heavy_exclamation_mark: **Do not** begin your project within the class repo.

:heavy_exclamation_mark: **Do not** clone your project into the class repo.

1. After your project has been approved, [make a new github repo for your project](https://help.github.com/articles/create-a-repo/). You will be deploying this project onto github pages, so you **must** name your repo `yourgithubusername.github.io` (for example, if my github username was octocat I would do: octocat.github.io)

![](https://i.imgur.com/bzBJdZ5.png)

From there, follow the instructions outlined by github themselves on [github.io](https://pages.github.com/)

Please note that you will be using this same repo for creating your portfolio later on. Thus for this project, we suggest that you create a folder within this repo that will contain all your code for your unit 1 app and name it appropriately (make it your app's name, for example `omdb-app`, and _**not**_ something like `unit-one-project`). You can then view your app online by going to your github.io url with `/the-folder-name` tacked on at the end!

<details><summary>Extra: want your own domain name?</summary>

You can also host your github pages with your own domain name. [Here is a walktrhough from namecheap, one web hosting service](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages)
</details>

## Technical Demonstration

All projects will be presented to the class.  Your presentation should:

* Be approximately 5 minutes in length. This is a large class, so keeping your presentation sweet and succinct is key -- consider practicing your presentation beforehand. 
* Show off all features of the app itself 
* Explain the technical details
* Explain the technical challenges
* Explain which improvements you might make

You will be sharing your app and your code.  Be prepared to answer questions from the instructors and other students.

## Meetings with instructors
_An instructor will contact you to setup a meeting time to approve your project._

**Friday, Feb 7 (Tomorrow!) - Mandatory**<br>
You will meet with an instructor for ~15 minutes to get your app idea approved. 

_How to prepare for your project approval_
- Pick a project idea 
- Pick an API
- Write user stories 
-  what should people be able to do on your website?
- Draw wireframes 
    - at least one wireframe of how your site will look
    - (draw more for multiple views)
- Make a schedule for yourself of what you want to accomplish
    - First day most details
    - Second day less details broader strokes of what you want to accomplish
    - Further:  try to pick 'milestones' (check with the project markdown that you are building what you need for MVP) and determine the order of importance, be sure to have a separate list for stretch goals
    - This takes practice so be ready to adjust your schedule
- You will have to make changes and adjust/adapt as you build

## How to Submit Your Project
Your project is due on Thursday, Feb 13 at 10:00 am EST. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your project to [this google sheet](https://docs.google.com/spreadsheets/d/1vwNAo9YW9Il0H_MhkDDXh4esbw0XcS5lZ58aILxs7Uc/edit#gid=0). Note that this will be the order you present your projects!

## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA

**TA Hours** (all times EST): 
- Normal Hours!

## Suggested Ways to Get Started

* **Wireframe** Make a drawing of what your app will look like in all of its stages (what does it look like as soon as you log on to the site? What does it look like once data is retrieved?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

### Think about...

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

## Example Project Idea 

Below is a very simple project idea using OMDB and jQuery (please note, your project should include more styling and functionality): 

![](https://i.imgur.com/L6hwHMR.gif)

Consider framing your project around a problem. For example, if I were to create an app similar to the one above, maybe the problem is my friends and I always have weekly movie nights and we're starting to run out of movies to watch. So, I thought about creating an app where I can search for movies and see their summaries. Or just thought about creating an app to help schedule the movie nights with what movie we'll be watching, etc. 

## Useful Resources

* **[How to Ask a Question](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Waverider/wiki/How-To-Ask-A-Question)**
* **[Class Recordings](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Waverider/wiki/Videos)**
* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
* **[jQuery Docs](http://api.jquery.com)**
* **[GitHub Pages](https://pages.github.com)**
* **[Trello](https://trello.com)**

<hr>  
