# Holidays are Here Again!


We now have separated our front and back ends! Woot!

Can we... dare to try to connect our Holidays app build from Unit 3 to a new backend here?

I think we can! And I challenge us to have fun too!

## Get started with rails

- start a new rails project (holidays_rails_api) 
- rails db:create
- rails generate scaffold


Remember our schema from Mongoose
  
  
  
  
  ```js
    const holidaySchema = mongoose.Schema({
    name: {type: String, required: true},
    celebrated: {type: Boolean, default: false},
    description: {type: String, default: 'Best holiday ever!'},
    likes: {type: Number, default: 0},
    tags:[{type:String}]
  })

```




```
```


While you can match the datatypes with a scaffold, you'll have to generate a migration
and change the default

eg

```rb
  def change
    create_table :holidays do |t|
      t.string :name
      t.boolean :celebrated, :default => false
      # more code
```

Once you think you've got it, test it with postman! All of them! Create, Read, Update, Delete!

Why not just get our holidays app up and running and test it there?

Part of our problem solving toolkit is being able to isolate problems and bugs. Where is the problem coming from? 
The front end or the back? If you can narrow it down that way, you now have much less
code to look through and are less likely to make a breaking change in another way.

## Get started with CRA
- remember to `npm install` if you are pulling this code down and haven't worked on it from your computer. 
We tell git not to track node_modules

- When we built our back end in unit 3, it was running on port 3003 or 3004. Hunt through your app and update CRA to connect with your rails API which is on localhost:3000

- CORS ERROR! Go back to your rails app, install and configure CORS (note where your CRA is running from)



## Problem

Mongo IDs were `_id`
Rails IDS are `id`

Where should you change it?

Can you just search through `App.js` and change every `._id` to `id` (use a find find/replace tool). Yes. It's one file and not too bad. But what if this were a production app with hundreds of components?

Can you update rails and break with convention? Not easily. I'd even argue it goes deeper into Rails than is worth it for a bonus lab. Also, what about the larger eco-system of a production level app?

Maybe your employer would say 'hey keep that mongo db where it is but new stuff should be on rails!' 

Again this is a tiny app, so it's not too hard to hack something. But real world solutions can get messy and weird.
