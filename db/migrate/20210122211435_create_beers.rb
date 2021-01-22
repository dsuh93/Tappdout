class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :beer_name, null: false
      t.integer :brewery_id, null: false
      t.integer :abv
      t.integer :ibu
      t.string :style, null: false
      t.string :description

      t.timestamps
    end
    add_index :beers, :beer_name, unique: true
    add_index :beers, :brewery_id 
  end
end
