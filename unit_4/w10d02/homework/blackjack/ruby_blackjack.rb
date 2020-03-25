################################################################################
class Player
  attr_accessor :name, :bankroll, :hand
  def initialize name, bankroll = 100
    @name = name
    @bankroll = bankroll
    @hand = []
  end
end
#player = Player.new "Mark", 100
computer = Player.new "House", 10000
################################################################################
class Card
  attr_reader :card_value
  def initialize card_value
    @card_value = card_value
  end
end
################################################################################
values = %w(1 2 3 4 5 6 7 8 9 10 10 10 10 11)
deck = []
4.times do
  values.each do |value|
    card = Card.new value.to_i
    deck << card
  end
end
################################################################################
new_deck = deck.shuffle
################################################################################
puts "Welcome to the blackjack table!"
puts "What is your name?"
player = Player.new gets.chomp
puts "Hello #{player.name}. Your bankroll is $#{player.bankroll}"

loop do
  player.hand = player.hand.clear
  computer.hand = computer.hand.clear
  puts "Are you ready for the next hand? (d)eal or (q)uit"
  input = gets.chomp.downcase
  if input == "d"
    player.hand << new_deck.shift(2)
    computer.hand << new_deck.shift(2)
    player_total = player.hand[0][0].card_value + player.hand[0][1].card_value
    computer_total = computer.hand[0][0].card_value + computer.hand[0][1].card_value
    puts "Here comes the deal"
    puts "*********************"
    puts "#{computer.name}: #{computer_total} total points"
    puts "VS"
    puts "#{player.name}: #{player_total} total points"
    puts "*********************"
    if computer_total == player_total
      puts "PUSH"
    elsif computer_total > player_total
      puts "#{computer.name} wins with a hand total of #{computer_total} points"
      puts "#{player.name} loses $10"
      player.bankroll = player.bankroll - 10
      puts "Your new bankroll is $#{player.bankroll}"
    else player_total > computer_total
      puts "#{player.name} wins with a hand total of #{player_total} points"
      puts "#{computer.name} loses $10"
      computer.bankroll = computer.bankroll - 10
      player.bankroll = player.bankroll + 10
      puts "Your new bankroll is $#{player.bankroll}"
    end
  break if input == "q"
  end
end
