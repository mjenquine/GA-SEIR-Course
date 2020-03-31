# Heroku with Ruby/SQL

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

You can now push just like you have in the past:

```
git push heroku master
```

Heroku is already set up to use Postgres, so you don't need any addons.  To access your DB, log into heroku psql:

```
heroku pg:psql
```

Now you can copy the create/insert commands that you used for your local setup. i.e. when you need to `CREATE TABLE` and etc.

## Adjusting Rails

You'll need to tell Rails to connect to the heroku postgres on production and use your local postgres when on your computer. In all the model files where you connect to the DB, make sure you write an if-else statement like so:


```ruby
class Fruit
    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'simplerails')
    end
    #the rest of your code goes here...
end
```

> NOTE: Make sure you change the dbname to whatever your database's name is!
