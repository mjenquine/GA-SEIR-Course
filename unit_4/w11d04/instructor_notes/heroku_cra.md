# Heroku with create-react-app

## Setup

**Run these commands in your project repo**

If you haven't already, log in:

```
heroku login
```

Create your heroku app like normal:

```
heroku create
```

You can now just push just like you have in the past! Simple!

```
git push heroku master
```

## Error Fixing 

**If you get an application error**, in terminal make sure you're inside your react app's folder and type: 

```
heroku logs --tail
```

If the error it gives you says something like `sh: 1: react-scripts: not found` 

![](https://i.imgur.com/hdOfDBO.png) 

Then all you need to do is open up your `package.json` and copy the `react-scripts` from `devDependencies` into `dependencies` like so: 

![](https://i.imgur.com/UbES9rU.png)

After doing that, git add, commit, and push to heroku again, and now it should work! 

If you get a different error, visit TA hours or reach out to your instructor as soon as possible! Remember to deploy early, deploy often!
