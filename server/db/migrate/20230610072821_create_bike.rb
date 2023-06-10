# db/migrate/20230610120200_create_bikes.rb
class CreateBike < ActiveRecord::Migration[6.0]
  def change
    create_table :bikes do |t|
      t.string :model
      t.string :size
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
