class Review < ActiveRecord::Base
  belongs_to :product
  belongs_to :user

  def print_review
    puts "Review for #{product.item} by #{user.name}: #{rating}. #{comment}"
  end
  
  def user
    User.find_by(id: user_id)
  end

  def product
    Product.find_by(id: product_id)
  end

end
