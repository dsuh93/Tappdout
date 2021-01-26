class CreateCheckins < ActiveRecord::Migration[5.2]
  def change
    create_table :checkins do |t|
      t.float :rating, null: false
      t.string :description, null: false
      t.integer :user_id, null: false
      t.integer :beer_id, null: false

      t.timestamps
    end
    add_index :checkins, :user_id
    add_index :checkins, :beer_id
  end
end
