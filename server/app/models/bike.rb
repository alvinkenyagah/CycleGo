class Bike < ActiveRecord::Base

  belongs_to :user
  has_many :rentals
end
