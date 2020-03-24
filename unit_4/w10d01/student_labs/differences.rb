# const getName = () => {
#   let name = prompt("what is your name?");
#   return name;
# };

# def get()
#   name = "what is your name?"
#   puts name
# end
#
# get()

# const reverseIt = () => {
#   let string = "a man, a plan, a canal, frenemies!";
#
#   let reverse = "";
#
#   for (let i=0; i < string.length; i++) {
#     reverse += string[string.length - (i+1)];
#   };
#
#   alert(reverse);
# };

# puts "a man, a plan, a canal, frenemies".reverse

# const swapEm = () => {
#   let a = 10;
#   let b = 30;
#   let temp;
#
#   temp = b;
#   b = a;
#   a = temp;
#
#   alert("a is now " + a + ", and b is now " + b);
# };

# def swap_em
#   a = 10
#   b = 30
#   a, b = b, a
#
#   puts "a is now #{a} and b is now #{b}."
#
# end
#
# swap_em
#
# const multiplyArray = (ary) => {
#   if (ary.length == 0) { return 1; };
#
#   let total = 1;
#   // let total = ary[0];
#
#   for (let i=0; i < ary.length; i++) {
#     total = total * ary[i];
#   };
#
#   return total;
# };
#
# arr = [1, 2, 3, 4, 5]
#
# puts arr.inject(:*)

# (1..100).each do |i|
#   if i % 5 == 0 and i % 3 == 0
#     puts "FizzBuzz"
#   elsif i % 5 == 0
#     puts "Buzz"
#   elsif i % 3 == 0
#     puts "Fizz"
#   else
#     puts i
#   end
# end

def fibonacci( n )
  return  n  if ( 0..1 ).include? n
  ( fibonacci( n - 1 ) + fibonacci( n - 2 ) )
end
puts fibonacci( 4 )
