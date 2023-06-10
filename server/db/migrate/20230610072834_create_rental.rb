# db/migrate/YYYYMMDDHHMMSS_create_rentals.rb
class CreateRental < ActiveRecord::Migration[6.0]
  def change
    create_table :rentals do |t|
      t.date :start_date
      t.date :end_date
      t.references :user, foreign_key: true
      t.references :bike, foreign_key: true

      t.timestamps
    end
  end
end
