book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

def print_price hash
  p hash[:price]
end
print_price(table)

def print_sums h1, h2
  p h1[:price] + h2[:price]
end
print_sums table, lamp

########### EULER ###########
def sums limit
sum = 0
num = 0
  while num <= limit
    if num % 3 == 0 || num % 5 == 0
      sum = sum + num
    end
    num +=1
  end
  p sum
end
sums 1000

### Method 2 ###

sum = 0
i = 1
while i < 1000 do
  sum += i if i % 3 == 0 || i % 5 == 0
  i += 1
end

p sum

############# PRIMES #############
### Method 1 ###
require "prime"
def check_prime? num
  num.prime?
end

puts "Prime number?: #{check_prime? 4}"

def get_primes num
  Prime.each(num) do |prime|
    p prime
  end
end

get_primes 100

### Method 2 ###
def check_prime? num
  (2..Math.sqrt(num)).each{|i|
    if num % i == 0
      p "Number: #{num}"
      p "i: #{i}"
      return false
    end
  }
  p "Number: #{num}"
  return true
end

p check_prime? 40
p check_prime? 3
p check_prime? 100
p check_prime? 15

def get_primes limit
  (2..limit).each{|i|
    if check_prime? i
      p i
    end
  }
end

get_primes 100
