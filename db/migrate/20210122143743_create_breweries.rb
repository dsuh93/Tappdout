class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :brewery_name, null: false
      t.string :brewery_type, null: false
      t.string :location, null: false

      t.timestamps
    end
    add_index :breweries, :brewery_name, unique: true
    add_index :breweries, :brewery_type
  end
end
