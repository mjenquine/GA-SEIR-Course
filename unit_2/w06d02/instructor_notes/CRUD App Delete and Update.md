# CRUD App with Mongoose - Delete and Update

## Begin With The End in Mind

Deletion:

1. Create a Delete Button
1. Create a DELETE Route
1. Have the Delete Button send a DELETE request to the server
1. Make the DELETE Route Delete the Model from MongoDB

Edit/Update:

1. Create a link to the edit route
1. Create an edit route
1. Create an PUT route
1. Have the edit page send a PUT request
1. Make the PUT Route Update the Model in MongoDB
1. Make the PUT Route Redirect Back to the Index Page

![](https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2F1502826406%2F1708w-getty-fruit-closeup-CarstenSchanter-EyeEm.jpg)

## Explanation ...


|#|Action|URL|HTTP Verb|EJS view filename|
|:---:|:---:|:---:|:---:|:---:|
|1| Index | /fruits/ | GET | index.ejs |
|2| Show | /fruits/:index | GET | show.ejs |
|3| New | /fruits/new| GET | new.ejs |
|4| Create | /fruits/ | POST| none |
|5| **Edit** |**/fruits/:id**|**GET**|**edit.ejs**|
|6| **Update** |**/fruits/:id**|**PUT**|**none**|
|7| **Destroy** | **/fruits/:index** | **DELETE** |**none** |


# Imitation ...
## Create a Delete Button

In your index.ejs file

```html
<li>
    The <a href="/fruits/<%=fruits[i].id; %>"><%=fruits[i].name; %></a> is  <%=fruits[i].color; %>.
    <% if(fruits[i].readyToEat === true){ %>
        It is ready to eat
    <% } else { %>
        It is not ready to eat
    <% } %>
    <!--  ADD DELETE FORM HERE-->
    <form>
        <input type="submit" value="DELETE"/>
    </form>
</li>
```

## Create a Delete Route

```javascript
app.delete('/fruits/:id', (req, res)=>{
    res.send('deleting...');
});
```

## Have the Delete Button send a DELETE request to the server

When we click "DELETE" on our index page (index.ejs), the form needs to make a DELETE request to our DELETE route.

The problem is that forms can't make DELETE requests.  Only POST and GET.  We can fake this, though.  First we need to install an npm package called `method-override`

```
npm install method-override
```

Now, in our server.js file, add:

```javascript
//include the method-override package
const methodOverride = require('method-override');
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
```

Now go back and set up our delete form to send a DELETE request to the appropriate route

```html
<form action="/fruits/<%=fruits[i].id; %>?_method=DELETE" method="POST">
```

## Make the Delete Route Delete the Model from MongoDB

Also, have it redirect back to the fruits index page when deletion is complete

```javascript
app.delete('/fruits/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, deletedFruit)=>{
        res.redirect('/fruits');//redirect back to fruits index
    });
});
```

## Create a link to an edit route

In your `index.ejs` file:

```html
<a href="/fruits/<%=fruits[i].id; %>/edit">Edit</a>
```

## Create an edit route/page

First the EJS:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Edit Fruit Page</h1>
        <form action="/fruits/<%=fruit.id%>?_method=PUT" method="POST">
    		<!--  NOTE: the form is pre-populated with values for the server-->
    		Name: <input type="text" name="name" value="<%=fruit.name%>"/><br/>
    		Color: <input type="text" name="color" value="<%=fruit.color%>"/><br/>
    		Is Ready To Eat:
            <input type="checkbox" name="readyToEat"
                <% if(fruit.readyToEat === true){ %>
                    checked
                <% } %>
            />
            <br/>
            <input type="submit" name="" value="Submit Changes"/>
        </form>
    </body>
</html>
```

Now the route:

```javascript
app.get('/fruits/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
        res.render('edit.ejs', {
            fruit: foundFruit //pass in found fruit
        });
    });
});
```

## Create an PUT route

```javascript
app.put('/fruits/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    res.send(req.body);
});
```

## Make the PUT Route Update the Model in MongoDB

```javascript
app.put('/fruits/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit)=>{
        res.send(updatedFruit);
    });
});
```

## Make the PUT Route Redirect Back to the Index Page

```javascript
Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit)=>{
    res.redirect('/fruits');
});
```
