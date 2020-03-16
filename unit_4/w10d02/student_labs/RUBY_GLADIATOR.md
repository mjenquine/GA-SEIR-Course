# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# Ruby Gladiator Arena

The Emperor has commissioned you to build a Gladiator Arena. You will do so using your knowledge of object-oriented Ruby.

You can run your code by using `ruby gladiator.rb` and interacting with the console.

## Part 1: The Gladiator

Create a `Gladiator` class that has the following properties...
- a `name`
- a `weapon` (one of Spear, Club, Trident)

Once defined, you should be able to do the following...

```ruby
max = Gladiator.new("Maximus", "Trident")
puts(max.name) # "Maximus"
puts(max.weapon) # "Trident"
```

### Bonus

Make it so that you cannot assign a Gladiator an invalid weapon (i.e., anything aside from Spear, Club or Trident. That means running code like `Gladiator.new("Jesse", "Taco")` would throw an error

## Part 2: The Arena

Create an `Arena` class that meets the following criteria...

### An arena has a name

```ruby
colosseum = Arena.new("Colosseum")
puts(colosseum.name) # => Colosseum
```
### The name should be capitalized

```ruby
colosseum = Arena.new("megalopolis")
puts(colosseum.name) # => Megalopolis
```

### An arena can have gladiators

```ruby
colosseum = Arena.new("Colosseum")
puts(colosseum.gladiators) # => []
```

### You can add a gladiator to the arena

```ruby
max = Gladiator.new("Maximus","Trident")
colosseum = Arena.new("Colosseum")
colosseum.addGladiator(max)
puts(colosseum.gladiators) # => [Gladiator]
```

### The arena should never have more than 2 gladiators in it at a time

```ruby
max = Gladiator.new("Maximus","Trident")
titus = Gladiator.new("Titus","Club")
andronicus = Gladiator.new("Andronicus","Spear")
colosseum = Arena.new("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
puts(colosseum.gladiators.length) # => 2
```

### If there are two gladiators in the arena, you can call a `fight` method that results in the elimination of one of the gladiators from the arena.

Winning conditions
- Trident beats Spear
- Spear beats Club
- Club beats Trident
- If the two gladiators have the same weapon, they are both eliminated.

```ruby
max = Gladiator.new("Maximus","Trident")
titus = Gladiator.new("Titus","Spear")
colosseum = Arena.new("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
puts(colosseum.gladiators) # => [max]
```

### Bonus

* Add a method to remove gladiators from the arena by name
* Update your winning conditions so that if the gladiator named "Maximus" is in the fight, he wins.
* Add a method to check to see if the crowd is entertained (`.entertained?`). The crowd is only entertained if Maximus is in the arena.
* Before a losing gladiator is eliminated, the user should be prompted to put their thumbs up or down. If user votes down, the losing gladiator is removed. If the user votes up, the gladiator stays in the arena and his opponent is removed. (Life isn't fair.)
