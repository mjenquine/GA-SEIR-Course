# Numbers (floats and integers)

# puts (1.class)
# puts (1.0.class)
# puts(1/2)
# puts(1/2.0)

#Strings
#
# puts("foo".length)
#
# puts("foo".include?("o"))
#
# str_one = "foo"
# num = 8
#
# puts("I can do #{num} burpees in 30 seconds because I am a burpee #{str_one}l")

#Symbols
# puts(:foo.class)

#Booleans
#
# puts(1 == 1)
# puts(true.class)
# puts(2 == 1)

#Arrays

# arr = [:Gustave, :Sandrine, :Delphine, :Maurice]
# puts(arr.length)
# puts(arr.last)
# puts(arr[0])
# puts(arr[2])
# puts(arr.include?(:Sandrine))
# arr.push(:Ric)
# arr.push(:Ben)
# puts(arr)
# puts(arr[-1])
# puts(arr[-2])
#
# new_arr = [1,2,3] + [4,5]
# puts(new_arr)

#Ranges
#
# new_arr = (1..10).to_a
#
# puts(new_arr)

#Hashes
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
# puts "Ben is #{ben['age']}"

# alfonso = {
#   :name => 'Alfonso',
#   :age => 19
# }
#
# puts alfonso[:name]
# puts alfonso[:age]
#
#
# evan = {
#   name: 'Evan',
#   age: '41'
# }
#
# puts evan

#Iteration

# 3.times{ |i| puts i }

# arr = [10, 20, 30]
# arr.each{ |num| puts num}
#
# puts arr.map{ |num| num/10 }

# arr.map do |num|
#   "#{num / 10} is great!"
# end

#Method
# def add(a, b)
#   a + b
# end

# def add(*nums)
#   return 0 if nums.empty?
#   nums.reduce { |sum, n| sum + n }
# end
#
# puts add 1, 2

# def say_hi(name = 'World')
#   puts "Hello, #{name}!"
# end
#
# say_hi('Gustave')

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
# number_message 10

# your_age = 136
#
# puts 'you are old!' if your_age >= 100
# puts 'you are old!' unless your_age < 100

# num = 24
#
# puts num.even? ? "#{num} is even!" : "#{num} is odd!"


# a = 10
# while a.positive?
#   puts a
#   a -= 1
# end

#
# ['one', 'two', 'three'].each do |str|
# 	puts 'the value is ' + str
# end
#
# ['one', 'two', 'three'].each { |str| puts 'the value is ' + str }
#
#
# times_two = [1,2,3].map do |num|
# 	num * 2
# end
# p times_two
#
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
#     yeild(elem)
#   end
# end
#
# each 0...5 do |currentNum|
# 	puts currentNum
# end
#
# log = Proc.new do |el|
# 	puts el
# end
# log.call(5)

# # # Select - Returns an array containing all elements of an array for which the given block returns a true value.
# p [1,2,3,4,5].select { |i| i > 3 } #returns [4,5]
# #
# # # Detect - Returns the first element of an array for which the block is true.
# p [1,2,3,4,5].detect { |i| i > 3 } #returns [4]
# #
# # # Reject - Returns an array for all elements of an array for which the given block returns false.
# p [1,2,3,4,5].reject { |i| i > 3 } #returns [1,2,3]
# # # GREP
# # #Returns an array of every element in the array for which Pattern === element
# p [1,3,5,10,15].grep (1..5) #returns [1,3,5]
# p [0.3, "three", :three, "thirty-three"].grep /three/ #returns ["three", :three, "thirty-three"]
# #
# # #You can also add a block to pass each matching element through
#  p [1,3,5,10,15].grep (1..5) {|i| i * 3} #returns [3,9,15]
# #




# .to_sym converts the object type string to a symbol
s = "cat".to_sym #convert the string "cat" to a symbol
puts s == :cat #evaluates that s is now a symbol


# .to_a converts the object type to an array
x = (1..10).to_a #convert the range 1..10 to an array
print x #prints the array x
