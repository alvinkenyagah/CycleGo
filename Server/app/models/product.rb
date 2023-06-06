class Product < ActiveRecord::Base
  has_many(:reviews)
  has_many(:users, through: :reviews)



  def reviews
    Review.where(product_id: id)
  end

  def users
    User.joins(:reviews).where(reviews: { product_id: id })
  end


  def leave_review(user, star_rating, comment)
    Review.create(product: self, user: user, rating: star_rating, comment: comment)
  end
  
  def print_all_reviews
    reviews.each do |review|
      review.print_review
    end
  end

  def average_rating
    total_reviews = reviews.count
    return 0 if total_reviews.zero?

    sum_ratings = reviews.sum(:rating)
    sum_ratings.to_f / total_reviews
  end

end
