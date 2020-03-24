# puts "Hello World!"
#
# adjective = "Big Bad"
#
# puts "Hello #{adjective} World!"
#
# greeting = "Hello World".upcase
#
# puts greeting

##############################################################
##############    Nums Array and Enumerables   ###############
##############################################################

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# print nums.uniq
# nums.push(5)
# nums.pop
# nums.shift
# nums.unshift(5)
# print nums.length
# print nums
# puts nums.include? 8
# print nums.find_all { |i| i > 10}
# puts nums.all? { |nums| nums > 0 }
# puts nums.any? { |nums| nums % 8 == 0}
# puts nums.count { |i| i > 4}
# nums.each_with_index { |item, index|
#   puts item * index
# }
# puts nums.find { |i| i > 0 and i % 7 == 0 and i % 5 == 0 }
# puts nums.find_index { |i| i > 0 and i % 7 == 0 and i % 5 == 0 }
# print nums.first(3)
# print nums.last(5)
# print nums.group_by { |i| i % 3}
# puts nums.minmax
# print nums.reject { |i| i % 3 == 0 }
# print nums.select { |i| i % 5 == 0 }

##############################################################
##############          Color Array            ###############
##############################################################

# colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# print colors.sample
# print colors.reverse
# colors.each { |i| puts i.upcase }

##############################################################
##############           Methods               ###############
##############################################################

# def find_area height, width
#   puts height * width
# end
#
# find_area 4, 4

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
#
# def multiply_each_by_five arr
#   puts arr.map { |i| i * 5 }
# end
#
# multiply_each_by_five nums

##############################################################
##############      Methods with a hash        ###############
##############################################################

# book = {
#   title: 'The Great Gatsby',
#   author: 'F Scott Fitzgerald',
#   year: 1925,
#   price: 10
# }
#
# lamp = {
#   type: 'reading',
#   brand: 'Ikea',
#   price: 25
# }
#
# table = {
#   type: 'bed side',
#   brand: 'Crate & Barrel',
#   color: 'birch',
#   price: 50
# }
#
# def print_price item
#   puts item[:price]
# end
# print_price table
#
# def print_item_sums item1, item2
#   puts item1[:price] + item2[:price]
# end
# print_item_sums table, lamp

##############################################################
##############          Check Prime            ###############
##############################################################

# require 'prime'
#
# def check_prime? x
#   puts Prime.instance.prime?(x)
# end
# check_prime? 5
#
# Prime.each(100) do |prime|
#   puts prime
# end
