![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# JWT Authentication with Angular and Local Storage

---
Title: JWT Authentication with Angular and localstorage<br>
Type: Walkthrough<br>
Creator: Thom Page <br>
Topics: JWT, Angular, Local Storage<br>

---

**Note:** This lesson assumes a backend has been made that will respond with a JSON Web Token, and that at least one User has been created with `username` and `password`.

Here is the authentication flow from browser to server and back using JWT:

![](https://i.imgur.com/hZcoOia.png)

We will be focusing on the browser-side (the laptop in the example). There are two laptops in each panel of the picture -- the first sends a request, the second receives a response.

For the server-side portion (the black box in the middle), see the Rails 5 API Authentication lesson.
<br>

## JWT

From the docs:

> What is JSON Web Token?

> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
Good reading here:

[JSON Web Tokens](https://jwt.io/introduction/)

![](https://i.imgur.com/obNqWIa.png)

All we are really sending is an encoded piece of information. When the information is decoded, it's a good ole Javascript Object with keys and values and such. Useful stuff.

Another picture of the Auth process using JWT (from the docs):

![](https://i.imgur.com/YVoufUm.png)

We will be storing our JWTs in our browser by putting them into 'local storage'. We can then retrieve them from local storage whenever we make a request to the server.

<br>

## ANGULAR

### SETUP

![](https://i.imgur.com/Jcy0ieT.png)

* Make boilerplate express project. No routes, just public files: `index.html`, `app.js`.


server.js

```javascript
const express = require('express');
const app = express();

const port = 4040;

app.use(express.static('public'));

app.listen(port, () => console.log("auth frontend running on port: ", port));
```

* Add in Angular 1.6

```javascript
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
```

**NOTE: The remaining code is in ES5. It recommended to translate it to ES6 or greater**

* Make a module and a main controller

```javascript
<html ng-app="auth_app">

var app = angular.module('auth_app', []);
```

![](https://i.imgur.com/B6N09Ai.png)

![](https://i.imgur.com/ri3mQdf.png)

```javascript
<body ng-controller="mainController as ctrl">

app.controller('mainController', ['$http', function($http){ }]);
```

![](https://i.imgur.com/qstbKdu.png)

![](https://i.imgur.com/y9j5NsS.png)

Test message:

```javascript
this.test = "hi"

{{ ctrl.test }}
```

<br>
<hr>

# LOG IN
### SET THE SESSION

Assuming we have created a user already (if not, create a user on the back-end).

Log in process:

* submit login form data, `username` and `password`
* **REQUEST:** username and password sent to the back-end login route (AJAX)
* **SERVER-SIDE** the back-end authenticates the username/password and generates a JWT
* **RESPONSE** the JWT arrives on the front-end from the back-end

Then we want to **store the JWT info in the browser**. This will be our browser's 'session'.

<br>

#### Log in form
Make a login form:

```html
    <form ng-submit="ctrl.login(userPass)">
      <input type="text" ng-model="userPass.username" placeholder="username"/>
      <input type="password" ng-model="userPass.password" placeholder="password"/>
      <input type="submit"/>
    </form>
```

![](https://i.imgur.com/9tDWY65.png)

Write the `login(userPass)` function and console log the input:

```javascript
  this.login = function(userPass) {
    console.log(userPass);
  }
```

![](https://i.imgur.com/d4bl2JV.png)

Result

![](https://i.imgur.com/ZSG1EZM.png)

<br>

### Send user credentials to the back-end

**Remember to enable CORS on your server**

```javascript
this.url = 'http://localhost:3000';
```

Make a POST request to the login route, and console.log the response. You should see the token in there.

![](https://i.imgur.com/BfLWTJy.png)

```javascript
    $http({
      method: 'POST',
      url: this.url + '/users/login',
      data: { user: { username: userPass.username, password: userPass.password }},
    }).then(function(response) {
      console.log(response);
    });
```
<hr>

Result:

![](https://i.imgur.com/e9BK8An.png)

Display logged in user's name:

```html
    <p>Logged in username: {{ ctrl.user.username }} </p>
```

Set the placeholder in the controller:

```javascript
  this.url = 'http://localhost:3000';
  this.user = {};
```

**NOTE: the following example uses `.bind()` which is not needed when using ES6 arrow functions.**

Bring the outside context of `this` into the callback by binding it, and set the user placeholder to have the data:

```javascript
    $http({
      method: 'POST',
      url: this.url + '/users/login',
      data: { user: { username: userPass.username, password: userPass.password }},
    }).then(function(response) {
      console.log(response);
      this.user = response.data.user;
    }.bind(this));
```

## localStorage

We have our user in our Angular, but our user is not 'stored' in our browser 'session'. We want our user to be able to click around without having to enter their credentials each time they query the server. For this we can set their credentials in the browser (and send those credentials to the server each time), with `localStorage`.


[MDN docs on localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

Testing and examples: Run localStorage in your developer console

locaStorage saves strings, but we can JSON-ify our stuff.

### Get and Set localStorage data

```
$ localStorage;
$ localStorage.setItem('currentUser', JSON.stringify({user: 'No Face'}));
$ localStorage;
$ localStorage.getItem('currentUser');
$ JSON.parse(localStorage.getItem('currentUser'));
$ localStorage.clear();
```

### Set JWT in localStorage

After our user has been authenticated, let's store the JWT in localStorage. We can then retrieve it for all subsequent checks.

```
localStorage.setItem('token', JSON.stringify(response.data.token));
```

![](https://i.imgur.com/wj9m5oX.png)

Check the token:

```
localStorage
```

```
JSON.parse(localStorage.getItem('token'));
```

<br>
<hr>
# ACCESS

### Authorize our user to view content

After our user has logged in, let's allow them to see a list of users. (We could have other models, like products, etc. but all we have right now are users).


* Make a link to see secret stuff
* The link runs a function that requests users from the db
* Add in an error message for the server response (our request will not allow us access yet)

![](https://i.imgur.com/8F0Biiv.png)

![](https://i.imgur.com/LAhuefD.png)

Trying to see secret stuff won't work yet.

Logging in trying to see it won't work either:

![](https://i.imgur.com/QRGycTh.png)

We need to pass the Authorization header to the back-end. We will do it the same way we did with Postman, but the token will come from localStorage.


## Authorization Header


The Authorization header is sent with the AJAX request. The token is retrieved from localStorage with `localStorage.getItem()`:

```javascript
  {
    headers: {
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  }
```

Add in the header:

![](https://i.imgur.com/vKzkkv4.png)

```javascript
  this.getUsers = function() {
    $http({
      url: this.url + '/users',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    }).then(function(response) {
      console.log(response);
      this.error = "Unauthorized";
    }.bind(this));
  }
```

### Success

If the Authorization is successful, let's see that list of users we've been wanting to see

Add in an ng-repeat for the users:

![](https://i.imgur.com/FWZmDKw.png)

In our AJAX request, if we receive a 401, display the error message, else, populate the users:

![](https://i.imgur.com/b2Y3KH9.png)

```javascript
  this.getUsers = function() {
    $http({
      url: this.url + '/users',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    }).then(function(response) {
      console.log(response);
      if (response.data.status == 401) {
          this.error = "Unauthorized";
      } else {
        this.users = response.data;
      }
    }.bind(this));
  }
```

Clicking secret stuff shows all the Thomases used for testing this app:

<br>

![](https://i.imgur.com/a6zqbg0.png)
<br>
<hr>

# Logout

Logging out is as simple as removing the token from localStorage.

![](https://i.imgur.com/KzA8cgB.png)

![](https://i.imgur.com/5MCiftO.png)

<br>
<hr>

# Additional considerations

How would you go about implementing the following?

* User is logged in immediately after sign up (doesn’t have to log in after signing up)

* User logs in and immediately sees just their own stuff. Logging in, either
    - backend: sends back all user’s related data in json format from the login route (user’s data is then populated). The user’s data is retrieved using the user’s id.
    - frontend: makes another ajax request using user id after login successful (user’s data is then populated)


* hide login panel when user is logged in

* hide logout panel when user is logged out

<br>
<hr>

# Code

### app.js

![](https://i.imgur.com/zgebu1l.png)

### index.html

![](https://i.imgur.com/6NGZacV.png)
