# app/models/rental.rb
class Rental < ActiveRecord::Base
    # Associations
    belongs_to :user
    belongs_to :bike
  
  end
  