# Set Up an API

## Lesson Objectives


1. Familiarize Yourself with the API
1. Test API
1. Onwards to full day build full CRUD app with Angular


## Today's Build

We'll be building a tiny app that let's us create, read, update and delete national holidays, using the MEAN stack. We will be starting with a completed back end.

## Set Up

1. make sure you are running `rails s` and `postgres`

## Exploring the back end

1. The server has a port of __________
1. The main routes are located __________
1. In the __________ controller, the following routes are available: __________
1. When you go to localhost: __________ the following page will load __________
1. We have one model, what are the key values and data types?


## Test our routes

### Using Postman (or equivalent)
- We have 4 routes to test
- Create  : post /holidays      : adds a new holiday
- Index   : get /holidays       : shows all holidays
- Update  : put /holidays/id    : updates a holiday
- Destroy : delete /holidays/id : deletes a holiday

### Test Create (add at least 3 holidays + 1 called 'update me')

<br>

[Need a holiday?](https://nationaldaycalendar.com/calendar-at-a-glance/)

<br>

 **In Postman**

 - choose `POST`
 - url: `localhost:3004/holidays`
 - body: `name` : `World Kindness`
 - `Send`

![Post Request to Holidays with Postman](https://i.imgur.com/ocWYoAN.png)
<br>

- Expected Output

![Successful Post Request with Postman](https://i.imgur.com/YjeiINA.png)

- Add two more holidays with the Post route
- Add one more holiday called `update me`

### Test Index Route

**In Postman**

 - choose `GET`
 - url: `localhost:3004/holidays`
 - `Send`

 - Expected Output

 ![Successful get request to index route with Postman](https://i.imgur.com/HYz62p1.png)

### Test Update Route

**In Postman**

  **Don't leave your index route yet!**
  - copy the `_id` of your `Update Me` holiday

- choose `PUT`
- url: `localhost:3004/holidays/that copied _id you got from your index route`

![Postman Input for Put Route](https://i.imgur.com/jdk9e3S.png)

- body:
 -  `name` : `delete me`
  - `celebrated` : `true`
- `Send`

![Postman Input for Put route, body stuff](https://i.imgur.com/wPkMvr2.png)

- Expected Output
  ![Successful put request to id route with Postman](https://i.imgur.com/EAszGd6.png)

- Do another get request to the index to double check

- Expected Output
![Successful get request to index, after update](https://i.imgur.com/qDuILu8.png)

### Test Delete Route

**In Postman**

**Don't leave your index route yet!**

- copy the `_id` of your `Update Me` holiday

- choose `DELETE`
- `url`: `localhost:3004/holidays/that copied _id you got from your index route`

- Expected Output
![Successful delete to id route with Postman](https://i.imgur.com/i0wtvxa.png)

- Do another get request to the index to double check

- Your `delete me` holiday should be gone

## Take aways
- taking the time to familiarize yourself with the back end and then testing it allows you to:  
  - get familiar with the routes available
  - get familiar with how the routes work
  - check that the routes work as expected: As you start building your front-end, you'll run into errors. By testing the back end and knowing it works, you can better __isolate__ the source of your errors, this will make debugging easier

