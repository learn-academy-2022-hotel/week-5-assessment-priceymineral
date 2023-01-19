# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# PSEUDO
# create a fxn called target words, takes in 2 args, array and target string
    # initialize an empty array variable
    # iterate over input array
        # if current word includes the target letter
            # push the word to the array created

    # return the created array

def target_words(words, target)
    words_array = []
    words.each do |word|
        if word.include? target
            words_array.push(word)
        end
    end
    words_array
end

p target_words(beverages_array, letter_o)
p target_words(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# PSEUDO
# create a fxn called hash values in order
    # initialize an empty array variable
    # iterate over the hash
        # Access the value at the current key
        # push each word into the new array
    # flatten and sort the array in alphabetical order
    # return the array

def hash_values_in_order(hash) 
    values = []
    hash.each do |key, value|
        values.push(value)
    end
    values.flatten.sort
end

p hash_values_in_order(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# PSEUDO
# create class Bike
# include mode, wheels, current_speed attribute variables
# include method that returns a string with all the data
# class Bike
#     def initialize(model, wheels=2, current_speed=0)
#         @model = model
#         @wheels = wheels
#         @current_speed = current_speed
#     end

#     def bike_info
#         "This #{@model} model bike has #{@wheels} wheels and is currently going #{@current_speed}mph"
#     end
# end

# my_bike = Bike.new('BMW')
# p my_bike
# p my_bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(model, wheels=2, current_speed=0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        "This #{@model} model bike has #{@wheels} wheels and is currently going #{@current_speed}mph"
    end

    def pedal_faster(speed)
        @current_speed += speed
    end

    def brake(speed)
        if @current_speed - speed < 0
            @current_speed = 0
        else 
            @current_speed -= speed
        end 
    end
end

my_bike = Bike.new('BMW')
p my_bike # <Bike:0x0000000106056390 @model="BMW", @wheels=2, @current_speed=0>
p my_bike.bike_info # "This BMW model bike has 2 wheels and is currently going 0mph"
p my_bike.pedal_faster(10) # 10
p my_bike.brake(15) # 0
p my_bike.pedal_faster(10) # 10
p my_bike.brake(5) # 0