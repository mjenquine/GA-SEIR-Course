# Tips for Getting Laravel Working with MAMP and Postgres

## Hooking Laravel up with MAMP

1. Start up MAMP and point its Document Root to wherever you're building your app.
1. `cd` to your Document Root
1. Run these commands to install composer for this project (found [here](https://getcomposer.org/download/)):

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'baf1608c33254d00611ac1705c1d9958c817a1a33bce370c0595974b342601bd80b92a3f46067da89e3b06bff421f182') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

1. Run `php composer.phar require laravel/installer` to install laravel
1. Run `php composer.phar create-project --prefer-dist laravel/laravel blog`.  Note you can change `blog` to whatever your want your app to be called
1. Edit `~/.bash_profile` and add the following at the end:

```
export PATH="/Applications/MAMP/bin/php/php7.3.8/bin:$PATH"
```

Adjust `php7.3.8` in the path above to be whatever version of PHP you're using on MAMP.  Go to Prefs->PHP in MAMP to check which version you're running.  You might have multiple options next to "Standard Version", so feel free to choose whichever option is the latest by clicking the radio button.  Save `~/.bash_profile` then run:

```
source ~/.bash_profile
```

1. Check your version of php `php -v`.  It should match MAMP's
1. Change your Document Root to the `public` dir inside your app.  If you named your app `blog` change the Doc Root to `blog/public`.  Restart your MAMP Servers
1. Check out http://localhost:8888/.  You should see the Larevel Welcome page:

![](https://i.imgur.com/DYGtvUj.png)

## Hooking Laravel up with Postgres

Start up Postgres normally.  Then add a sub database with whatever name you like (e.g. `laraveltest`).

Find the `.env` file in your app.  If you named your app `blog` it would be in `blog/.env`.  Adjust it, so this part:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

Looks like:

```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=laraveltest
DB_USERNAME=matthuntington
DB_PASSWORD=
```

1. Note, `DB_DATABASE` is whatever you called your sub database (e.g. `laraveltest`).  `DB_USERNAME` is whatever user you've used to log into your computer (run `whoami` in the terminal to see).
1. Now in the terminal, cd into your app (if you called it `blog` cd into `blog`).
1. Run `php artisan migrate`
1. You should see some messages about migrations being successfully created
1. Go into `psql` and connect to your sub db (e.g. `\c laraveltest`). Check to see if your tables are there with `\dt`

## Deployment to Heroku:

[This](https://devcenter.heroku.com/articles/getting-started-with-laravel#initializing-a-git-repository) is a good walkthrough.  Just make sure you start at "Initializing a Git repository" and that you're in your app directory (e.g. if you called the app `blog` when you started this, cd into `blog`).  You don't want to be in the parent dir which has just `blog composer.json composer.lock composer.phar vendor`

Also, you might need to set up your own config vars in order for laravel to be able to connect to postgres.

1. Go to your heroku dashboard: https://dashboard.heroku.com/apps
1. Click on your app
1. If you haven't already, add Heroku Postgres like you did in unit 4 by going to Resources, searching for it, and then adding it
1. Click on Settings

  ![](https://i.imgur.com/9ala8aH.png)

1. Click on Reveal Config Vars

  ![](https://i.imgur.com/WJPxsYw.png)
  
1. You should see:

  ![](https://i.imgur.com/eAWrE6n.png)

1. Now add additional config vars:

  ![](https://i.imgur.com/rdkPDVJ.png)

Note that the values for the config vars came from the `DATABASE_URL` config.  In the above examples, `DATABASE_URL` was

```
postgres://fsdvqytoptjeut:30544d29155c8bef34b8dbaf0818ec99dfe148a00d6cdaac80cb119365d8a2fc@ec2-54-235-208-103.compute-1.amazonaws.com:5432/d7g24p20e3ikab
```

This is just a url with a username and password values.  Its generic form looks like this:

```
postgres://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_DATABASE}
```

Note that the values inside `{}` correspond to which config var to set
