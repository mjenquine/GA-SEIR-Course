# Heroku Deployment of Create React App

## package.json changes

add node engines
 - check your version of node
 - check your version of nom
add both of them to package.json

```js
"engines": {
  "node": "10.11.0",
  "npm": "6.4.1"
},
```


##### if you have just one API that you are going to, you can set a proxy in your package.json

[Create react docs proxy](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development)

##### If you have more than one (ie you want to go between localhost and something on heroku, there is currently no way to support multiple proxies in create react app

[CRA github issues](https://github.com/facebook/create-react-app/issues/1780)


##### You can add custom variables with create react app. You need to start them with `process.env.REACT_APP_` (store the variables in a `.env` file - make sure that file s in the `.gitignore`

This works great locally. However on heroku it doesn’t seem to work even if you try to add it as an environmental variable (yet, as of spring 2019)

Under settings:
![heroku](https://i.imgur.com/3fAKuYd.png)

This does not seem to work on heroku

Additionally, it is important to change heroku build packs

[build pack](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack)


```
heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git
git commit --allow-empty -m 'Deploy with only create-react-app-buildpack'
git push heroku master

```
This ‘solution’ is ok for going between local host and heroku (assuming your CRA that is hosted on heroku should be consuming your express API that is on heroku

```js
let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3004'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log('current base URL:', baseURL)
```

Other ideas:
- put express app and create app in one project.
    - Downside is that you must either run them on two different servers locally to get things like hot reloading. Or to run them on one you must run `npm build` which means that every time you make a change in your react files src folder, you must run npm build again, which is a sub-optimal work flow.
