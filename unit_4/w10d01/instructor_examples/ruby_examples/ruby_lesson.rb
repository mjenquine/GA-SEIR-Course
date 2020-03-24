# Numbers (Floats and Integers)
# puts(1.class)
# puts(1.0.class)
# puts(1/2)
# puts(1/2.0)

# Strings
# puts("foo".length)
#
# puts("foo".include?("o"))
#
# str_one = "foo"
# num = 8
#
# puts("I can do #{num} burpees in 30 seconds because i am a burpee #{str_one}l")

# Symbols
# puts(:_.class)



# Booleans

# puts(1 == 1)
# puts(true.class)
# puts(2 == 1)


#Arrays

# arr = [:Gustave, :Sandrine, :Delphine, :Maurice]
#
# puts(arr.length)
# puts(arr.last)
# puts(arr[0])
# puts(arr[2])
# puts(arr.include?(:Sandrine))
# arr.push(:Ric)
# arr.push(:Ben)
# # puts(arr)
# puts(arr[-2])
#
# new_arr = [1,2,3] + [4,5]
# puts(new_arr)

#Ranges

# new_arr = (1...10).to_a
#
# puts(new_arr)

# Hashes
#
# ben = {
#   'name' => 'Ben',
#   'age' => 25
# }
#
# puts ben['name']
# puts ben['age']
# ben['age'] = 26
# puts ben['age']
#
# puts " Ben is #{ben['age']}"
#
# alfonso = {
#   :name => 'Alfonso',
#   :age => 19
# }
# puts alfonso[:name]
# puts alfonso[:age]
# puts "The Fonz is #{alfonso[:age]}"
#
# evan = {
#   name: 'Evan',
#   age: 41
# }
#
# puts evan
# for(var i = 0; i < 3; i++) {
#   console.log(i);
# }

# 3.times { |i| puts i }
#
# arr = [10, 20, 30]
# arr.each { |num| num }
#
# puts arr.map { |num| num / 10 }

# arr.map do |num|
#   "#{num / 10} is great!"
# end

# Method
# def add (a, b)
#   a + b
# end

# def add(*nums)
#   return 0 if nums.empty?
#   nums.reduce { |sum, n| sum + n }
# end
#
# puts add 3,5,9,26
#
# def say_hi(name = 'World')
#   puts "Hello, #{name}!"
# end
#
# say_hi

# def number_message(num)
#   if num < 10
#     puts 'what a small number'
#   elsif num > 10
#     puts 'That is a big number!'
#   else
#     puts 'That number is just right!'
#   end
# end
#
# # number_message 10
#
# # your_age = 136
# #
# # puts 'you are old!' if your_age >= 100
# # puts 'you are old!' unless your_age < 100
# #
# # num = 24
# # num.even? ? "#{num} is even!" : "#{num} is odd!"
# #
# # a = 10
# # while a.positive?
# #   puts a
# #   a -= 1
# # end
#
# ['one', 'two', 'three'].each do |str|
# 	puts 'the value is ' + str
# end
#
# ['one', 'two', 'three'].each { |str| puts 'the value is ' + str }
#
# times_two = [1,2,3].map do |num|
# 	num * 2
# end
#
# p times_two
#
# p [1,2,3].map {|num| num * 2}

# const each = (array, callback)=>{
# 	for(let i = 0; i < array.length; i++){
# 		callback(array[i]);
# 	}
# }
#
# each([1,2,3,4], (currentNum)=>{
# 	console.log(currentNum);
# });

# def each (arr, &blk)
#   for elem in arr
#     blk.call(elem)
#   end
# end
#
# each 0...5 do |currentNum|
# 	puts currentNum
# end
#
# def each(arr)
# 	for elem in arr
# 		yield(elem) #use this instead of &blk.call
# 	end
# end
#
# each 0...5 do |currentNum|
# 	puts currentNum
# end




# log = Proc.new do |el|
# 	puts el
# end
# log = Proc.new {|el| puts el}
# log.call(5)
#
# foo = Proc.new do
#   puts 'hi'
# end
#
# def  bar(callback)
#   callback.call()
# end
# bar(foo)












# # An enumerable is just a way to iterate over an array and perform some action on it
# # These methods do not alter the original array.
#
# # Select - Returns an array containing all elements of an array for which the given block returns a true value.
# p [1,2,3,4,5].select { |i| i > 3 } #returns [4,5]
#
# # Detect - Returns the first element of an array for which the block is true.
# p [1,2,3,4,5].detect { |i| i > 3 } #returns [4]
#
# # Reject - Returns an array for all elements of an array for which the given block returns false.
# p [1,2,3,4,5].reject { |i| i > 3 } #returns [1,2,3]
#
#
# # GREP
# #Returns an array of every element in the array for which Pattern === element
p [1,3,5,10,15].grep (1..5) #returns [1,3,5]
p [0.3, "three", :three, "thirty-three"].grep /three/ #returns ["three", :three, "thirty-three"]
#
# #You can also add a block to pass each matching element through
 p [1,3,5,10,15].grep (1..5) {|i| i * 3} #returns [3,9,15]
#
# # SORTING METHODS
# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort
# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort_by { |word| word.length}
#
# p [2, 5, 1, 3].sort #returns [1, 2, 3, 5]
#
# # p [2, "hello", 1, "what"].sort #ArgumentError: comparison of Fixnum with String failed
# p [2, "hello", 1, "what"].sort_by(&:to_i) #["hello", "what", 1, 2]
# p [2, "hello", 1, "what"].sort_by(&:to_s) #[1, 2, "hello", "what"]
#
# # ANY, ALL
# # %w() is a function that will return an array of the given "words"
# p %w(mew pikachu).any? { |word| word.length <= 3 } #returns true
# p %w(mew pikachu).all? { |word| word.length <= 3 } #returns false
# p %w(mew cat her the).all? { |word| word.length <= 3 } #returns true
#
# # REDUCE
# #Reduce takes a collection and reduces it down to a single element. It applies an operation to each element, maintaining a running “total.”
# p (5..10).reduce(:+) #returns 45
# p (1..4).reduce(:*) #returns 24
# p [5, 6, 7].reduce(5, :+) #returns 23
#
#
#
# #end
