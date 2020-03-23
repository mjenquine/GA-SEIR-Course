![](/ga_cog.png)

# Project #3: MERN Stack - Group Project

## Attendance
There are only three mandatory attendance checks during project week, but as always please make sure you're working on your project every day!

  - **Wednesday, March 18**: You have Outcomes at 4:30 PM ET
  - **Friday, March 20**: Project presentation day! You're required to be in the class zoom starting at 10:00 AM ET

## Stand-ups
Not required, but a suggestion: consider having stand-ups with your group every day to keep track of how your project progress is coming along. Consider the following points to talk about:
  - What did I work on yesterday
  - What am I trying to get done today
  - What is preventing me from getting this done.

Need a refresher? Read the morning exercise on scrum/agile development [here](/unit_3/w09d01/morning_exercise)!

## Technical Requirements

### &#x1F534; Mandatory to pass:
#### MVP - Minimum Viable Product

For this project, you will be making another full CRUD app using the technologies outlined below. 

* A working full-stack application, built by you and your group members, using the MERN stack: **Node.js, Mongoose, Express and React**.  
   - Your project should *not* include *EJS*.
* At least _one model_ with full **CRUD**.
* Include **at least one** of the following features:
    - Authorization
      - Include sign up/login functionality, with encrypted passwords & an authorization flow
    - Pull from a third party API - either client side with AJAX or server-side with an NPM
      - NPMs that work with an API: Twitter, Yelp, etc.  Remember the `request` module can make API calls server side to any URL.  
    - Have two models
      - Have two separate models that don't have to be related
    - Have related models
      - Models can be related in a one-to-many relationship, for example users can have many posts
    - Use a CSS framework like Skeleton or Bootstrap
    - Use React Router
* **Be deployed online** and accessible to the public via **Heroku**
* :heavy_exclamation_mark: A git repository **not inside the class repo**.  
   - *At least* one GitHub commit per day *per person*.
* Use some sort of **daily tracker** that all group members use to help organize your workflow (e.g. Trello).
* **A ``README.md`` file** with explanations of the technologies used, the approach taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
  - Have a **link to your hosted working app** in the **`README.md`** file in your github repo

### &#x1F535; Stretch Goals (Not Mandatory):
#### Recommended Features
* Include portfolio-quality styling
* Incorporate **Google Maps**
* Use `socket.io` for real-tme updates (like gmail) and collaborative interaction (like chat rooms).  
* Inside in your `README.md`:
    * Include User Stories
    * Include **wireframes** that you designed during the planning process

#### :heavy_exclamation_mark: Important note about External APIs!

When you are calling External APIs **server-side** that require a key, you should store those keys somewhere private like an `.env` file. They are the only proof that you are you and you are allowed to call that API, after all.

For example, it is very important that you not push your API keys to a public Github repo. Keep them in a `.env` file and make sure you add `.env` to your `.gitignore`. Note that since it won't be pushed into the github repo, your partner won't be able to pull it either. So, make sure both partners write their own local `.env` file with the key!

This is especially true when working with Amazon Web Services (AWS). Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).

## Make A New Repo & Setup for Heroku Deployment

Before you begin coding, make a new GitHub repo for your project. _Take the following steps to ensure you have the right file structure/set up in order to deploy your site to Heroku._

:heavy_exclamation_mark: You will be using GitHub, **not** GitHub Enterprise!

1. *One* group member will make a new github repo for your project **outside** of our class repo on GitHub.  This person will be the *owner*. The *owner* should add other members of the group as *collaborators* under the `Settings` tab of the repo. Collaborators should clone the repo. It's the same process as the paired homework!

2. _If you did not initialize the repo with a Node .gitignore_ make sure that inside this new repo you create a `.gitignore` file in the root of the repository directory. Put `node_modules` as the content of this file.
     - :arrow_right: _After installing express, do a `git status` before adding and committing.  Make sure node modules are not being pushed up to the repo and are correctly in your `.gitignore`!  You can also copy the [class repo's .gitignore](/.gitignore)_
     - If you see the node_modules folder on your github repo, you haven't properly ignored it!
        - Read [here](https://github.com/Krafalski/probable-meme/blob/master/README.md) on how to get rid of node_modules if you didn't ignore properly

3. On `npm init`, specify `server.js` as your entry point

4. If you did not set up your `entry point` in `package.json` correctly, make sure that you edit your `pacakge.json` so that `main` is set to `server.js`

5. Make sure your `server.js` and `package.json` are in the **root** of your project repository


6. **To set up your shared database for deployment, [please follow these notes](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Waverider/blob/master/unit_3/w09d01/instructor_notes/Create%20React%20App%20%26%20Heroku.md). You will NEED to do this before starting anything else on your project.**

## Technical Demonstration

All projects will be presented to the class. Your presentation should be:

* Approximately 5-10 minutes in length
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make

Additionally, we would like *each* group member to answer *at least one* of the following questions:

1) What went well for your group?
2) What was your groups biggest struggle?
3) What was the most useful tool that your group relied on the most?
4) What was the most surprising aspect of working in a group/a thing (or things) you didn’t anticipate?

You will be sharing your app and your code.  Be prepared to answer questions from the instructors and other students.  *All group members should speak during presentation*.

## Meetings with instructors

**TODAY**<br>
Your group will meet with your dedicated project instructor for 15 minutes to get your app idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

## How to Submit Your Project
Your project is due on Friday, March 20 at 10:00 am ET. Your group will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your group project to [this google sheet]().  Note that this is the order you will be presenting.

## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA
  * Check out Dan's pinned post in the #sei-danlawrence-officehours channel to view hours 

## Etc.

<details><summary><strong>Suggested Ways to Get Started</strong></summary>

* **Wireframe** Make a drawing of what your app will look like in all of the stages of the app(what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
</details>


<details><summary><strong>Think about...</strong></summary>

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?
</details>

<details><summary><strong>Useful Resources</strong></summary>

* **[Heroku](http://www.heroku.com)**
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)**
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)**
* **[Mongo Documentation](https://docs.mongodb.com/manual/)**
* **[Mongoose Documentation](http://mongoosejs.com/docs/guide.html)**
* **[Mongo Cheatsheet](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Stitch/wiki/Mongo-Cheatsheet)**
</details>
<hr>  

## Inspiration - Projects by Previous SEI Students

- [GirlGang](http://girl-gang.herokuapp.com/)
- [The Dad Joke Factory](https://dadjoketime.herokuapp.com/)
- [Fit Kids](https://fitkids.herokuapp.com/)
- [Shelf Help](https://shelf-help.herokuapp.com/)
- [99 Bottles of Beer](https://beerswall99.herokuapp.com/)
- [XCursion](https://xcursion.herokuapp.com/)
