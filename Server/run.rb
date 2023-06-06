require_relative 'config/environment'

require './app/models/product.rb'
require './app/models/review.rb'
require './app/models/user.rb'

# Access methods on Review model
review = Review.first
user = review.user
product = review.product
review.print_review
puts "User: #{user.name}"
puts "Product: #{product.item}"

# Access methods on Product model
product = Product.first
reviews = product.reviews
users = product.users
product.leave_review(user, 4, "Great product!")
product.print_all_reviews
puts "Average rating: #{product.average_rating}"
puts "Product Reviews: #{reviews}"
puts "Users who reviewed the Product: #{users}"

# Access methods on User model
user = User.first
reviews = user.reviews
products = user.products
favorite_product = user.favorite_product
puts "Favorite product: #{favorite_product&.item}"
user.remove_reviews(product)
puts "User Reviews: #{reviews}"
puts "Products reviewed by the User: #{products}"
