# p "Hello World".upcase
# p "Hello World".class
#
# class String
#   def is_palindrome?
#     self.upcase.reverse == self.upcase
#   end
# end
#
# p "radar".is_palindrome?

class World
  attr_accessor :name, :shape
  attr_reader :people
  def initialize name, shape = "oblate spheroid"
    # constructor (name){}
    # required to be named initilize analagous with constructor
    @name = name
    @shape = shape
    @people = []
  end

  def populate name, age
    @people << { name: name, age: age }
  end
end

world1 = World.new "Panthelassa"
world2 = World.new "Tatooine", "sphere"
world3 = World.new "Nothing But Shrimp", "dome"
world4 = World.new "San Junipero", "cylinder"

# p world1.shape
# p world2.shape
# p world3.shape
# p world4.shape

# world4.populate "Jamal", 21
# world4.populate "Mark", 27
# world4.populate "Chris", 29
# world4.populate "Will", 1000
# world4.populate "Eric", 27
# world4.populate "Nathanael", 24
# p world4.people

# planets = %w( Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto)
# p planets
# milky_way = []
#
# planets.each do |planet|
#   world = World.new planet
#   milky_way << world
# end
#
# p milky_way

# puts "Write something: "
# input = gets.chomp
# p "You wrote: #{input}"
# puts "i am so awesome"

=begin
Multi line comment in ruby
This is the hangman game
=end
#
# dictionary = ["potato", "honey", "tea", "rice", "quinoa"]
#
# word = dictionary.sample
# puts "The word has #{word.length} letters."
# puts word
#
# loop do
#   puts "Guess which word I secretly chose!"
#   input = gets.chomp
#
#   if input == word
#   	puts "Yep. You got it. The word was #{word}."
#     break
#   else
#   	puts "WRONG"
#   	puts "(t)ry again or (q)uit?"
#   	again = gets.chomp.downcase
#   	break if again == "q"
#   end
#
# end


class Word
  attr_reader :word, :letters_display
	def initialize word
      @word = word
		letters = word.split('')
		@letters_display = letters.map do |each_time_i_run|
			{ letter: each_time_i_run, hidden: true }
		end
	end
	def render
		@letters_display.each do |l|
			if l[:hidden]
				print " _ "
			else
				print l.letter
			end
		end
	end

end

dictionary = ["potato", "honey", "tea", "rice", "quinoa"]
word = dictionary.sample

puts "Hangman! Guess this word"
puts " The length of the word is #{word.length
}"
current_word = Word.new word
p current_word.word.split('')
p current_word.letters_display

loop do
	current_word.render
	input = gets.chomp
  the_word = current_word.word.split('')
  # we would run a loop or a ruby array enumerable
  # if the input is contained in the_word array
  # if it is we need to update the object for the word and change hidden to false
	if input == current_word.word
		puts "Yep. You got it. The word was #{current_word.word}."
		break
	else
		puts "WRONG"
		puts "(t)ry again or (q)uit?"
		again = gets.chomp.downcase
		break if again == "q"
	end
end
