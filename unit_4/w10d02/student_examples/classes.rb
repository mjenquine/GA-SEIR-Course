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

###################################################################

class World

  attr_accessor :name, :shape
  attr_reader :people

  def initialize name, shape = "oblate spheroid"
    @name = name
    @shape = shape
    @people = []
  end

  def populate name, age
    @people << { name: name, age: age }
  end

end

############# Factory #############################################
planets = %w(Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto)
milky_way = []

planets.each do |planet|
  world = World.new planet
  milky_way << world
end

# p milky_way
###################################################################

####### initial class exercise ################
# world1 = World.new "Panthelassa"
# world2 = World.new "Tatooine", "sphere"
# world3 = World.new "Nothing But Shrimp", "dome"
# world4 = World.new "San Junipero", "cylinder"
#
# p world1.shape
# p world2.shape
# p world3.shape
# p world4.shape
#
# world1.populate "Mark", 37
# p world1
###################################################################

class Mathy

  def self.double_up a
    a * 2
  end

end

# p Mathy.double_up 10
#didn't have to make an instance of the class. Just had to use self
###################################################################

=begin
Multi line comment in ruby
this is the hangman game
=end

# dictionary = ["potato", "honey", "tea", "rice", "quinoa"]
#
# word = dictionary.sample
#
#
# puts "The word has #{word.length} letters."
# puts word
#
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
##########################################################

class Word

	def initialize word
    @word = word
    letters = word.split('')
		@letters_display = letters.map do |l|
			{ letter: l, hidden: true }
		end
	end

  def word
   @word
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

loop do
	current_word.render
	input = gets.chomp

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
